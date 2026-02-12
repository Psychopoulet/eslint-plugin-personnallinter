// deps

    // natives
    const { join } = require("node:path");

    // externals
    const react = require("eslint-plugin-react");
    const reactHooks = require("eslint-plugin-react-hooks");

    // locals
    const { plugins, languageOptions, rules } = require(join(__dirname, "ts-front.js"));

// consts

    const { parser } = languageOptions;

// module

module.exports = {

    "name": "personnallinter/react",

    "plugins": {

        ...plugins,

        "react": react,
        "react-hooks": reactHooks

    },

    "languageOptions": {

        "parser": parser,

        "parserOptions": {

            ...languageOptions.parserOptions,

            "ecmaVersion": "latest",
            "ecmaFeatures": {
                "jsx": true
            }

        },

        "globals": {

            ...languageOptions.globals,

            "JSX": true,
            "React": true

        }

    },

    "rules": {

        ...rules,

        "jsx-quotes": [ "error", "prefer-double" ]

    },

    "settings": {
        "react": {
            "version": "detect"
        }
    }

};
