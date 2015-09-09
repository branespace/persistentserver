"use strict";

var http = require('http');
var port = process.argv[2] || 3000;
var Router = require('./router');
var router = Router();

require('./routes')(router);

var server = http.createServer(router.route);

server.listen(port, function(){
    console.log('Server running on: ' + port);
});