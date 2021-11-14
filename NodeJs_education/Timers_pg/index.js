require('dotenv').config()

const express = require("express");
const nunjucks = require("nunjucks");
const { nanoid } = require("nanoid");
const { createHash } = require("crypto");
const cookieParser = require("cookie-parser");

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT || 5432,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
  }
});

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  tags: {
    blockStart: "[%",
    blockEnd: "%]",
    variableStart: "[[",
    variableEnd: "]]",
    commentStart: "[#",
    commentEnd: "#]",
  },
});

app.set("view engine", "njk");

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded());

const hash = (d) => createHash("sha256").update(d).digest("hex");

const getActiveTimers = async (statusOfActivity) => {
  if (statusOfActivity) {
    const timers = await knex.select().table("active_Timers");
    timers.forEach((i) => i.start = Number(i.start));
    return timers
  }
  const timers = await knex.select().table("stopped_Timers");
  timers.forEach((i) => {
    i.start = Number(i.start);
    i.end = Number(i.end);
  })
  return timers
}

const findUserByName = async (username) => await knex.select().table("users").where({name:username}).then(data => data.length < 1 ? false : data[0]);

const findUserBySessionId = async (sessionId) => {
  const user = await knex.select().table("users").where({session_id:sessionId}).then(data => data.length < 1 ? false : data[0]);
  if (!user) return;
  return user
};

const createSession = async (userId) => {
  const sessionId = nanoid();
  await knex("users").where({id:userId}).update('session_id', sessionId);
  return sessionId;
};

const deleteSessions = async (sessionsId) => await knex("users").where({session_id:sessionsId}).update('session_id', null);


const auth = () => async (req, res, next) => {
  if (!req.cookies["sessionId"]) {
    return next();
  }
  const user = await findUserBySessionId(req.cookies["sessionId"]);
  req.user = user;
  next();
};

app.get("/", auth(), (req, res) => {
  try {
    res.render("index", {
    user: req.user,
    authError: req.query.authError === "true" ? "Wrong username or password" : req.query.authError,
  });
  } catch(err) {
    res.status(400).send(err.message)
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await findUserByName(username);
    const hashpass = hash(password);
    if (!user || user.password !== hashpass) {
      return res.redirect("/?authError=true");
    }
    const sessionId = await createSession(user.id);
    res.cookie("sessionId", sessionId, { httpOnly: true }).redirect("/");
  } catch(err) {
    res.status(400).send(err.message)
  }
});

app.get("/api/timers", async (req, res) => {
  try {
    const result = await getActiveTimers(req.query.isActive === "true");
    result.forEach((i) => (i.progress = Date.now() - Number(i.start)));
    res.send(result);
  } catch(err) {
    res.status(400).send(err.message)
  }
});

app.get("/logout", auth(), async (req, res) => {
  try {
    if (!req.user) return res.redirect("/");
    await deleteSessions(req.user.session_id);
    res.clearCookie("sessionId").redirect("/");
  } catch(err) {
    res.status(400).send(err.message)
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    await knex("users").insert({name:username, password:hash(password)});
    res.redirect("/");
  } catch(err) {
    res.status(400).send(err.message)
  }
});

app.post("/api/timers", async (req, res) => {
  try {
    await knex("active_Timers").insert({start: Date.now(), description: req.body.description});
    res.status(201);
  } catch(err) {
    res.status(400).send(err.message)
  }
});

app.post("/api/timers/:id/stop", async (req, res) => {
  try {
    const timer = await knex.select().table("active_Timers").where({id:req.params.id}).then(data => data.length < 1 ? false : data[0]);
    if (!timer) res.status(404)
    else {
      const test = await knex("stopped_Timers").insert({start: timer.start, end: Date.now(), duration: Date.now() - Number(timer.start), description: timer.description});
      await knex("active_Timers").where({id:req.params.id}).del()
      res.json(test);
    }
  } catch(err) {
    res.status(400).send(err.message)
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`  Listening on http://localhost:${port}`);
});
