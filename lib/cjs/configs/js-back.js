// deps

    // natives
    const { join } = require("node:path");

    // locals
    const { plugins, languageOptions, rules } = require(join(__dirname, "commons", "js.js"));

// module

module.exports = {

    "name": "personnallinter/js-back",

    "plugins": {
        ...plugins
    },

    "languageOptions": {

        "parserOptions": {
            "ecmaVersion": "latest",
            "sourceType": "module"
        },

        "globals": {

            ...languageOptions.globals,

            // natives
            "__dirname": true,
            "__filename": true,
            "Buffer": true,
            "console": true,
            "clearInterval": true,
            "clearTimeout": true,
            "module": true,
            "NodeJS": true,
            "os": true,
            "process": true,
            "Promise": true,
            "require": true,
            "setImmediate": true,
            "setInterval": true,
            "setTimeout": true,

            // mocha
            "after": true,
            "afterEach": true,
            "before": true,
            "beforeEach": true,
            "describe": true,
            "it": true

        }

    },

    "rules": {

        ...rules,

        "no-console": "warn", // [warn] should not be used, but tolerated
        "no-alert": "error"

    }

};
