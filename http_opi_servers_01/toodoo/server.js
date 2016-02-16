var restify = require('restify');
var bunyan = require('bunyan');
var options = {
  name: "TooDoo API"
};

var server = restify.createServer(options);

server.use(restify.bodyParser({
  maxBodySize: 10 * 1024
}));

server.on('after', restify.auditLogger({
  log: bunyan.createLogger({
    name: 'audit',
    stream: process.stdout
  })
}));

module.exports = server;

require('./routes');
