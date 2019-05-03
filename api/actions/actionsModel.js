const tbl = 'actions';
const basic = require('../basicModel')(tbl);

module.exports = {
  get: basic.get,
  post: basic.post,
}
