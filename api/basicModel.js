const db = require('../data/dbConfig');

module.exports = function(tbl) {
  return {
    get: function(id) {
      return db(tbl);
    },    
    post: function(entry) {
      return db(tbl).insert(entry);
    },
  }
}