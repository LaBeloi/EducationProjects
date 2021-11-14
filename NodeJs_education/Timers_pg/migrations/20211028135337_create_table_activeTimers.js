exports.up = function(knex) {
  return knex.schema.createTable("active_Timers", (table) => {
    table.increments('id');
    table.bigInteger('start').notNullable();
    table.string('description', 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("active_Timers")
};
