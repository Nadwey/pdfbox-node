"use strict";

const fs = require("fs");
const java = require("java");
const path = require("path");

const libDir = path.join(process.cwd(), "bin");

const dependencies = fs.readdirSync(libDir);

dependencies.forEach(function (dependency) {
    java.classpath.push(libDir + "/" + dependency);
});

module.exports.getJavaInstance = function () {
    return java;
};
