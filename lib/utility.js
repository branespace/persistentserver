"use strict";

var fs = require('fs');
var lastIndex = getIndex();

exports.getNextIndex = function () {
    return lastIndex++;
};

function getIndex() {
    fs.readdir(__dirname + '/../notes', function (err, data) {
        if (err) {
            return err;
        }
        if(data.length === 0){
            lastIndex = 1;
        } else {
            lastIndex = +data[data.length - 1];
        }
        console.log(lastIndex);
    });
}

exports.writeFile = function (path, data, callback) {
    console.log(path);
    fs.writeFile(path, data, callback);
};

exports.readFile = function (path, callback) {
    fs.readFile(path, callback);
};

exports.delete = function (path, callback){
    fs.unlink(path, callback);
};

exports.getNumber = function (url) {
    return url.match(/\/notes\/(\d+)/)[1];
};

