"use strict";

var utility = require(__dirname + '/../../lib/utility'),
    resp = require(__dirname + '/../../lib/response');

exports.put = function (req, res) {
    var incoming = '';
    req.on('data', function (data) {
        incoming += data;
    });
    req.on('end', function () {
        var json = JSON.parse(incoming);
        var body = json.body;
        var filename = __dirname + '/../../notes/' + utility.getNumber(req.url);
        utility.delete(filename, function (err) {
            if (err) {
                return err;
            }
            utility.writeFile(filename,
                body, function (err) {
                    if (err) {
                        return err;
                    }
                });
            resp.plainResp(res, 204, 'http://localhost:3000/notes/' + filename);
        });
    });
};