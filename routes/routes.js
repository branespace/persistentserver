"use strict";

var post = require('./notes/create');

module.exports = function registerRouters(router) {
    router.get('/notes', function (req, res) {

    });
    router.patch('/notes', function (req, res) {

    });
    router.delete('/notes', function (req, res) {

    });
    router.put('/notes', function (req, res) {

    });
    router.post('/notes', function (req, res) {
        post(req, res);
    });
};