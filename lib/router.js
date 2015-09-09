"use strict";

//Router from sea-d49 router, author: toastynerd

var routes = {
    'DELETE': {},
    'GET': {},
    'PATCH': {},
    'POST': {},
    'PUT': {}
};

var Router = function(){};

module.exports = exports = function() {
    return new Router();
};

Router.prototype.delete = function(route, callback){
    routes.DELETE[route] = callback;
};

Router.prototype.get = function(route, callback){
    routes.GET[route] = callback;
};

Router.prototype.patch = function(route, callback){
    routes.PATCH[route] = callback;
};

Router.prototype.post = function(route, callback){
    routes.POST[route] = callback;
};

Router.prototype.put = function(route, callback){
    routes.PUT[route] = callback;
};

Router.prototype.route = function(req, res) {
    if (typeof routes[req.method][req.url] === 'function') {
        routes[req.method][req.url](req, res);
    }
};