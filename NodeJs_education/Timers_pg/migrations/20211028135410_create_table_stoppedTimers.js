exports.up = function(knex) {
  return knex.schema.createTable("stopped_Timers", (table) => {
    table.increments();
    table.bigInteger('start').notNullable();
    table.bigInteger('end').notNullable();
    table.integer('duration').notNullable();
    table.string('description', 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("stopped_Timers");
};
