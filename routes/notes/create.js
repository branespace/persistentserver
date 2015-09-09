"use strict";
var utility = require(__dirname + '/../../lib/utility'),
    resp = require(__dirname + '/../../lib/response');

module.exports = function create(req, res) {
    var incoming = '';
    req.on('data', function (data) {
        incoming += data;
    });
    req.on('end', function () {
        var json = JSON.parse(incoming);
        var body = json.body;
        var filename = utility.getNextIndex();
        utility.writeFile(__dirname + '/../../notes/' + filename,
            body, function (err) {
               if(err) {return err;}
            });
        resp.plainResp(res, 201, 'http://localhost:3000/notes/' + filename);
    });
};
