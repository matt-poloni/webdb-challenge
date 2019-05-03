const tbl = 'actions';
const basic = require('../basicModel')(tbl);
const db = require('../../data/dbConfig');

module.exports = {
  get: basic.get,
  post: basic.post,
  getByID,
  put: basic.put,
  del: basic.del,
}

async function getByID(id) {
  const action = await db(tbl)
    .where({id})
    .first();
  return {
    ...action,
    completed: !!action.completed,
  }
}
