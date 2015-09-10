"use strict";

var POST = require('./notes/create');
var GET = require('./notes/retrieve');
var PATCH = require('./notes/update').put;
var PUT = require('./notes/update').put;
var DELETE = require('./notes/delete');

module.exports = function registerRouters(router) {
    router.get('/notes', function (req, res) {
        GET(req, res);
    });
    router.patch('/notes', function (req, res) {
        PATCH(req, res);
    });
    router.delete('/notes', function (req, res) {
        DELETE(req, res);
    });
    router.put('/notes', function (req, res) {
        PATCH(req, res);
    });
    router.post('/notes', function (req, res) {
        POST(req, res);
    });
};