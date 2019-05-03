const tbl = 'projects';
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
  const project = await db(tbl)
    .where({id})
    .first();
  const actions = await db('actions as a')
    .select('a.id', 'a.description', 'a.notes', 'a.completed')
    .where({ project_id: id });
  return {
    ...project,
    completed: !!project.completed,
    actions: actions.map(action => ({
      ...action,
      completed: !!action.completed
    }))
  }
}
