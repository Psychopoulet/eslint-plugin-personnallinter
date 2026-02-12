// deps

    // natives
    const { join } = require("node:path");

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

            // AngularJS, jQuery, Socket IO
            "angular": true,
            "jQuery": true,
            "$": true,
            "SocketIOClient": true

        }

    },

    "rules": {

        ...rules,

        "no-console": "warn", // [warn] should not be used, but tolerated
        "no-alert": "warn" // [warn] should not be used, but tolerated

    }

};
