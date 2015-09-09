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
        console.log(data);
        if(data.length === 0){
            lastIndex = 1;
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