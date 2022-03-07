"use strict";

const fs = require("fs");
const java = require("@markusjx/java");
const path = require("path");

// TODO
java.createJVM(null, java.java_version.VER_1_8);

const libDir = path.join(__dirname, "../bin");
const dependencies = fs.readdirSync(libDir);
dependencies.forEach(function (dependency) {
    java.classpath.append(path.join(libDir, dependency));
});

module.exports.getJavaInstance = function () {
    return java;
};

module.exports.end = () => {
    java.destroyJVM();
}