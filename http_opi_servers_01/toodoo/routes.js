var server  = require('./server');
var resources = require('./resources/index');
// lists

server.get('/lists', resources.lists.list);
server.put('/lists/:list', resources.lists.create);
server.del('/lists/:list', resources.lists.del);

//items

server.get('/items', resources.items.item);
server.post('/items/:list', resources.items.create);
server.del('/items/:list', resources.items.del);
