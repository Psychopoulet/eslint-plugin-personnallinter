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
    "rules": {
        "n/no-sync": "warn", // [warn] should not be used, but tolerated for package.json reading purposes
    }
});
