"use strict";

exports.plainResp = function(res, status, data){
    exports.resp(res, status, data, {"Content-Type": "text/plain"});
};

exports.resp = function(res, status, data, mime){
    res.writeHead(status, mime);
    res.write(data);
    return res.end();
};

exports.jsonResp = function(res, status, data){
    exports.resp(res, status, data, {"Content-Type": "application/json"});
};

exports.error404 = function(res){
    exports.resp(res, 404, 'File Not Found', {"Content-Type": "test/plain"});
};