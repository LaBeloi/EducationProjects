const {createHash} = require('crypto');
exports.up = function(knex) {
  const pas = createHash("sha256").update('pwd007').digest("hex");
  return knex("users").insert({name: 'admin', password: pas});
};

exports.down = function(knex) {
  return knex("users").where({name:'admin'}).del()
};
