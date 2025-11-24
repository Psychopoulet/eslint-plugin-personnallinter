// deps

    // natives
    const { join } = require("node:path");

    // locals
    const { plugins, languageOptions, rules } = require(join(__dirname, "js-back.js"));
    const { parser: parserTS, plugins: pluginsTS, languageOptions: languageOptionsTS, rules: rulesTS } = require(join(__dirname, "commons", "ts.js"));

// module

module.exports = {

    "name": "personnallinter/ts-back",

    "plugins": {
        ...plugins,
        ...pluginsTS
    },

    "parser": parserTS,

    "languageOptions": {

        "parserOptions": {
            ...languageOptions.parserOptions,
            ...languageOptionsTS.parserOptions
        },

        "globals": {
            ...languageOptions.globals,
            ...languageOptionsTS.globals
        }

    },

    "rules": {
        ...rules,
        ...rulesTS
    }

};
