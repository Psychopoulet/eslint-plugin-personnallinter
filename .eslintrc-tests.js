// deps

    // natives
    const { join } = require("node:path");

    // externals
    const { defineConfig } = require("eslint/config");

    // locals
    const personnallinter = require(join(__dirname, "lib", "cjs", "main.cjs"));

// modules

module.exports = defineConfig({
    "plugins": {
        personnallinter
    },
    "extends": [ personnallinter.configs["js-back"] ],
    "ignores": [ "test/patterns/**/*" ] // [ignore] the patterns purpose is to test the rules, they MUST fail linting
});
