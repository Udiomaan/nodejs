var server = require('./server');

var port = Number(process.env.SERVER_PORT) || 8890;

server.listen(port, function() {
  console.log('Toodoo API server listening on %j', server.address());
});
