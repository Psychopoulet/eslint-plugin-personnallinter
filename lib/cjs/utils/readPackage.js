// deps

    // natives
    const { join } = require("node:path");
    const { readFileSync } = require("node:fs");

// module

module.exports = function readPackage () {

    return JSON.parse(readFileSync(join(__dirname, "..", "..", "..", "package.json")));

};
