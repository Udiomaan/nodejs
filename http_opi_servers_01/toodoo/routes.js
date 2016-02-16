var server  = require('./server');
var resources = require('./resources/index');
var validating = require('./middleware/validating');
var schemas = require('./schemas');
// lists

server.get('/lists', resources.lists.list);
server.put('/lists/:list', validating(schemas.list), resources.lists.create);
server.del('/lists/:list', resources.lists.del);

//items

server.get('/lists/:list/items', resources.items.item);
server.post('/lists/:list/items/:item', validating(schemas.item) , resources.items.create);
server.del('/lists/:list/items/:item', resources.items.del);
