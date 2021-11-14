exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments('id');
    table.string('name', 255);
    table.string('password', 255);
    table.string('session_id', 255)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
