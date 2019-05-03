const tbl = 'actions';
const basic = require('../basicModel')(tbl);

module.exports = {
  get: basic.get,
  post: basic.post,
  // getByID,
  put: basic.put,
  del: basic.del,
}
