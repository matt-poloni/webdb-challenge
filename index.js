const server = require('./api/server');

const port = 5000;
server.listen(port, function() {
  console.log(`*** Web API Listening on http://localhost:${port} ***`);
});
