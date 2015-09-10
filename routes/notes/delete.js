"use strict";

var utility = require(__dirname + '/../../lib/utility'),
    resp = require(__dirname + '/../../lib/response');

module.exports = function (req, res) {
    var filename = __dirname + '/../../notes/' + utility.getNumber(req.url);
    console.log('delete' + filename);
    utility.delete(filename, function (err) {
        if (err) {
            return err;
        }
        resp.plainResp(res, 204, 'http://localhost:3000/notes/' + filename);
    });
};
