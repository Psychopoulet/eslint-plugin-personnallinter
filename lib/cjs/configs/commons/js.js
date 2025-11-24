
// deps

    // externals
    const n = require("eslint-plugin-n");
    const stylistic = require("@stylistic/eslint-plugin");

// modules

module.exports = {

    "plugins": {
        "n": n,
        "@stylistic": stylistic
    },

    "languageOptions": {

        "parserOptions": {},

        "globals": {
            "Map": true,
            "Set": true,
            "Promise": true
        }

    },

    // all the rules : https://eslint.org/docs/latest/rules

    "rules": {

        // [Possible Problems]

        "array-callback-return": "error",
        "constructor-super": "error",
        "for-direction": "error",
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-binary-expression": "error",
        "no-constant-condition": "error",
        "no-constructor-return": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-new-native-nonconstructor": "error",
        "no-new-symbol": "error",
        "no-obj-calls": "error",
        "no-promise-executor-return": "off", // [off] we can want to return a "resolve" or "reject" value (void)
        "no-prototype-builtins": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": "error",
        "no-use-before-define": "warn", // [warn] in lib declarations, some methods can use the following ones (sub-methods) for clarity
        "no-useless-backreference": "error",
        "require-atomic-updates": "error",
        "use-isnan": "error",
        "no-regex-spaces": "error",
        "valid-typeof": "error",

        // [Suggestions]

        "accessor-pairs": "error",
        "arrow-body-style": [ "error", "always" ],
        "block-scoped-var": "error",
        "camelcase": "error",
        "capitalized-comments": "off", // [off] comments should be free
        "class-methods-use-this": "warn", // [warn] inherited methods can not have "this" used
        "complexity": "warn", // [warn] should not be used, but tolerated
        "consistent-return": "error",
        "consistent-this": "error",
        "curly": "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "func-name-matching": "error",
        "func-names": "error",
        "func-style": [ "error", "declaration" ],
        "grouped-accessor-pairs": "error",
        "guard-for-in": "off", // [off] never meet this case
        "id-denylist": "warn", // [warn] should not be used, but tolerated
        "id-length": "off", // [off] too many use of length 1 vars (Exception e, for let i, etc...)
        "id-match": "off", // [off] too much restrictive
        "init-declarations": "error",
        "logical-assignment-operators": [ "error", "always" ],
        "max-classes-per-file": [
            "warn", // [warn] can be tolerated for libs
            {
                "ignoreExpressions": true,
                "max": 1
            }
        ],
        "max-depth": "warn", // [warn] should not be used, but tolerated for specific complex methods
        "max-lines": [
            "warn", // [warn] should not be used, but tolerated for old or complex files
            {
                "skipBlankLines": true,
                "skipComments": true
            }
        ],
        "max-lines-per-function": [
            "warn", // [warn] should not be used, but tolerated for old or complex files
            {
                "max": 100,
                "skipBlankLines": true,
                "skipComments": true
            }
        ],
        "max-nested-callbacks": "warn", // [warn] should not be used, but tolerated for specific complex methods
        "max-params": "warn", // [warn] should not be used, but tolerated for specific complex methods
        "max-statements": "warn", // [warn] can be tolerated for old or complex files
        "multiline-comment-style": "off", // [off] comments should be free
        "new-cap": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": [ "error", { "allow": [ "^" ] } ],
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-console": "error",
        "no-continue": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",
        "no-else-return": "off", // [off] there always should be an "else" for a pill of "if"
        "no-empty": "error",
        "no-empty-function": "error",
        "no-empty-static-block": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off", // [off] comments should be free
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off", // [off] why assign var for obvious use (like 60 minutes = 1h) ?
        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-negated-condition": "off", // useless
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-object-constructor": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": "off", // [off] wtf ?
        "no-proto": "error",
        "no-redeclare": "error",
        "no-restricted-exports": "off", // [off] can be tolerated for libs
        "no-restricted-globals": "error",
        "no-restricted-imports": "off", // [off] never meet this case
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-ternary": "off", // [off] wtf ?
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-undefined": "warn", // [warn] should not be used, but tolerated
        "no-underscore-dangle": "off", // [off] used for private attributes/methods in class
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "error",
        "no-with": "error",
        "object-shorthand": "off", // [off] too complex to implement properly
        "one-var": [ "error", "never" ],
        "operator-assignment": [ "error", "always" ],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "warn",
        "prefer-exponentiation-operator": "error",
        "prefer-named-capture-group": "off", // [off] tricky to use
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "off", // [off] less clear
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "off", // [off] less clear
        "radix": "error",
        "require-await": "error",
        "require-unicode-regexp": "off", // [off] never meet this case
        "require-yield": "error",
        "sort-imports": "off", // [off] less clear (in certain cases)
        "sort-keys": "off", // [off] less clear (in certain cases)
        "sort-vars": "error",
        "strict": [ "error", "global" ],
        "symbol-description": "error",
        "vars-on-top": "error",
        "yoda": [ "error", "always" ],

        // [Layout & Formatting]

        "line-comment-position": "off", // [off] comments should be free
        "unicode-bom": "off", // [off] never meet this case

        // [Deprecated]

        // replaced

        // "id-blacklist": 0, => id-denylist
        // "no-new-object": "error", => no-object-constructor

        // removed

        // "no-catch-shadow": "error", => used for IE8 support
        // "no-restricted-modules": "error", => Definition for rule 'n/no-restricted-modules' was not found
        // "no-return-await": "error",
        // "require-jsdoc": "error",
        // "valid-jsdoc": "error",

        // [plugins]

        // n
        "n/callback-return": "error",
        "n/global-require": "warn", // [warn] should not be used, but tolerated
        "n/handle-callback-err": "error",
        "n/no-deprecated-api": "error",
        "n/no-mixed-requires": "error",
        "n/no-new-require": "error",
        "n/no-path-concat": "error",
        "n/no-process-env": "error",
        "n/no-process-exit": "error",
        "n/no-sync": "error",

        // @stylistic

        "@stylistic/array-bracket-newline": [
            "error",
            {
                "multiline": true,
                "minItems": 3
            }
        ],
        "@stylistic/array-bracket-spacing": [ "error", "always" ],
        "@stylistic/array-element-newline": [ "error", "consistent" ],
        "@stylistic/arrow-parens": [ "error", "always" ],
        "@stylistic/arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "@stylistic/block-spacing": "error",
        "@stylistic/brace-style": [ "error", "stroustrup" ],
        "@stylistic/comma-dangle": [ "error", "never" ],
        "@stylistic/comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "@stylistic/comma-style": [ "error", "last" ],
        "@stylistic/computed-property-spacing": [ "error", "never" ],
        "@stylistic/dot-location": [ "error", "property" ],
        "@stylistic/eol-last": "error",
        "@stylistic/func-call-spacing": "error",
        "@stylistic/generator-star-spacing": [
            "error",
            {
                "before": true,
                "after": false
            }
        ],
        "@stylistic/indent": "off", // [off] too complex & restrictive to be used
        "@stylistic/key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "@stylistic/keyword-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "@stylistic/linebreak-style": [ "warn", "unix" ],
        "@stylistic/lines-around-comment": "error",
        "@stylistic/lines-between-class-members": "off", // [off] attributes can be packed
        "@stylistic/max-len": [
            "warn", // [warn] should not be used, but tolerated
            {
                "code": 150,
                "ignoreComments": true,
                "ignoreTrailingComments": true,
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "@stylistic/max-statements-per-line": [
            "error",
            { "max": 2 }
        ],
        "@stylistic/multiline-ternary": "off", // [off] depend of the context
        "@stylistic/new-parens": "error",
        "@stylistic/newline-per-chained-call": "off", // [off] depend of the context
        "@stylistic/no-confusing-arrow": "error",
        "@stylistic/no-extra-parens": "warn", // [warn] should not be used, but tolerated
        "@stylistic/no-extra-semi": "error",
        "@stylistic/no-floating-decimal": "error",
        "@stylistic/no-mixed-operators": "error",
        "@stylistic/no-mixed-spaces-and-tabs": "error",
        "@stylistic/no-multi-spaces": "error",
        "@stylistic/no-multiple-empty-lines": "error",
        "@stylistic/no-tabs": "error",
        "@stylistic/no-trailing-spaces": "error",
        "@stylistic/no-whitespace-before-property": "error",
        "@stylistic/nonblock-statement-body-position": [ "error", "below" ],
        "@stylistic/object-curly-newline": [
            "error",
            { "consistent": true }
        ],
        "@stylistic/object-curly-spacing": [ "error", "always" ],
        "@stylistic/object-property-newline": "error",
        "@stylistic/one-var-declaration-per-line": "error",
        "@stylistic/operator-linebreak": [ "error", "before" ],
        "@stylistic/padded-blocks": [
            "error",
            {
                "classes": "always",
                "switches": "always"
            }
        ],
        "@stylistic/padding-line-between-statements": "error",
        "@stylistic/quote-props": [ "error", "always" ],
        "@stylistic/quotes": [ "error", "double" ],
        "@stylistic/rest-spread-spacing": [ "error", "never" ],
        "@stylistic/semi": [ "error", "always" ],
        "@stylistic/semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "@stylistic/semi-style": [ "error", "last" ],
        "@stylistic/space-before-blocks": [ "error", "always" ],
        "@stylistic/space-before-function-paren": [ "error", "always" ],
        "@stylistic/space-in-parens": [ "error", "never" ],
        "@stylistic/space-infix-ops": "error",
        "@stylistic/space-unary-ops": "error",
        "@stylistic/spaced-comment": [ "error", "always" ],
        "@stylistic/switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "@stylistic/template-curly-spacing": "error",
        "@stylistic/template-tag-spacing": [ "error", "always" ],
        "@stylistic/wrap-iife": "error",
        "@stylistic/wrap-regex": "off", // [off] not simplier to read
        "@stylistic/yield-star-spacing": [
            "error",
            {
                "before": true,
                "after": false
            }
        ]

    }
};
