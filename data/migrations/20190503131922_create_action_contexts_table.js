
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action_contexts', tbl => {
    tbl.increments();

    tbl.integer('action_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('actions')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    
    tbl.integer('context_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('contexts')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action_contexts');
};
