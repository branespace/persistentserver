"use strict";

var utility = require(__dirname + '/../../lib/utility'),
    resp = require(__dirname + '/../../lib/response');

module.exports = function retrieve(req, res){
    var uri = utility.getNumber(req.url);
    utility.readFile(__dirname + '/../../notes/' + uri,
        function(err, data){
            if (err) {return resp.error404(res);}
            var obj = { body: data.toString() };
            return resp.jsonResp(res, 200, JSON.stringify(obj));
        });
};