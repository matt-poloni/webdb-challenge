const db = require('../data/dbConfig');

module.exports = function(tbl) {
  return {
    get: async function() {
      const items = await db(tbl);
      return items.map(item => ({
        ...item,
        completed: !!item.completed
      }))
    },
    post: function(entry) {
      return db(tbl).insert(entry);
    },
    put: function(id, changes) {
      return db(tbl).where({id}).update(changes);
    },
    del: function(id) {
      return db(tbl).where({id}).del();
    }
  }
}