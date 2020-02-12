exports.up = function(knex) {
    return knex.schema.table('todos', function(table) {
        table.boolean('isCompleted').defaultTo(false);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('todos', function(table) {
        table.dropColumn('isCompleted');
    })
  };