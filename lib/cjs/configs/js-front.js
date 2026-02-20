// deps

    // natives
    const { join } = require("node:path");

    // externals
    const globals = require("globals");

    // locals
    const { plugins, languageOptions, rules } = require(join(__dirname, "commons", "js.js"));

// module

module.exports = {

    "name": "personnallinter/js-front",

    "plugins": {
        ...plugins
    },

    "languageOptions": {

        "parserOptions": {
            "ecmaVersion": "latest"
        },

        "globals": {
            ...languageOptions.globals,
            ...globals.browser
        }

    },

    "rules": {

        ...rules,

        "no-console": "warn", // [warn] should not be used, but tolerated
        "no-alert": "warn" // [warn] should not be used, but tolerated

    }

};
