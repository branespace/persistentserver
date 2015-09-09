"use strict";

var fs = require('fs');
var lastIndex = getIndex();

exports.getNextIndex = function(){
    return lastIndex++;
};

function getIndex(){
    var files = fs.readdirSync(__dirname + '/notes');
    files = files.sort;
    return files[files.length - 1];
}

