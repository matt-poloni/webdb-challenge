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
  const contexts = await db('action_contexts as ac')
    .select('c.id', 'c.name')
    .where({ action_id: id })
    .leftJoin('contexts as c', 'ac.context_id', 'c.id')
  return {
    ...action,
    completed: !!action.completed,
    contexts
  }
}
