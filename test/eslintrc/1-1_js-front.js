// deps

    // externals
    const { defineConfig } = require("eslint/config");

    // locals
    const personnallinter = require("eslint-plugin-personnallinter");

// modules

module.exports = defineConfig({
    "plugins": {
        personnallinter
    },
    "extends": [ personnallinter.configs["js-front"] ]
});
