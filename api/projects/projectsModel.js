const tbl = 'projects';
const basic = require('../basicModel')(tbl);

module.exports = {
  get: basic.get,
  post: basic.post,
  getByID,
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
    actions
  }
}
