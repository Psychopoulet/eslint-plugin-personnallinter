// deps

    // natives
    const { join } = require("node:path");

    // externals
    const { defineConfig } = require("eslint/config");

    // locals
    const personnallinter = require(join(__dirname, "lib", "cjs", "main.cjs"));

// modules

module.exports = defineConfig([
    {
        "files": [
            "./lib/**/*.js",
            "./lib/main.cjs",
            "./test/**/*"
        ],
        "ignores": [
            "./test/patterns/*.js"
        ],
        "plugins": {
            personnallinter
        },
        "extends": [ personnallinter.configs["js-back"] ]
    }
]);
