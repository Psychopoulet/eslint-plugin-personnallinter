
// deps

    // natives
    const { join } = require("node:path");

    // externals
    const typescriptEslint = require("@typescript-eslint/eslint-plugin");
    const typescriptParser = require("@typescript-eslint/parser");

// consts

    const { rules } = require(join(__dirname, "js.js"));

    const tsExtendedRulesKeys = [

        // [eslint]

        // Possible Problems

        "@typescript-eslint/no-loss-of-precision",
        "@typescript-eslint/no-unused-vars",
        "@typescript-eslint/no-use-before-define",

        // Suggestions
        "@typescript-eslint/class-methods-use-this",
        "@typescript-eslint/default-param-last",
        "@typescript-eslint/dot-notation",
        "@typescript-eslint/init-declarations",
        "@typescript-eslint/max-params",
        "@typescript-eslint/no-array-constructor",
        "@typescript-eslint/no-empty-function",
        "@typescript-eslint/no-implied-eval",
        "@typescript-eslint/no-loop-func",
        "@typescript-eslint/no-magic-numbers",
        "@typescript-eslint/no-restricted-imports",
        "@typescript-eslint/no-shadow",
        "@typescript-eslint/no-unused-expressions",
        "@typescript-eslint/no-useless-constructor",
        "@typescript-eslint/prefer-destructuring",
        "@typescript-eslint/require-await"

        // Deprecated

        // removed
        // "@typescript-eslint/return-await",

        /*

        // [@stylistic]

        "@typescript-eslint/block-spacing",
        "@typescript-eslint/brace-style",
        "@typescript-eslint/comma-dangle",
        "@typescript-eslint/comma-spacing",
        "@typescript-eslint/func-call-spacing",
        "@typescript-eslint/indent",
        "@typescript-eslint/key-spacing",
        "@typescript-eslint/keyword-spacing",
        "@typescript-eslint/lines-around-comment",
        "@typescript-eslint/lines-between-class-members",
        "@typescript-eslint/no-extra-parens",
        "@typescript-eslint/no-extra-semi",
        "@typescript-eslint/object-curly-spacing",
        "@typescript-eslint/padding-line-between-statements",
        "@typescript-eslint/semi",
        "@typescript-eslint/space-before-blocks",
        "@typescript-eslint/space-before-function-paren",
        "@typescript-eslint/space-infix-ops"

        */

    ].map((rule) => {
        return rule.replace("@typescript-eslint/", "");
    });

    const extendedRules = {};

    Object.keys(rules).forEach((ruleKey) => {

        if (ruleKey.startsWith("n/") && tsExtendedRulesKeys.includes(ruleKey.replace("n/", ""))) {

            extendedRules[ruleKey] = "off";
            extendedRules[ruleKey.replace("n/", "@typescript-eslint/")] = rules[ruleKey];

        }
        else if (ruleKey.startsWith("@stylistic/") && tsExtendedRulesKeys.includes(ruleKey.replace("@stylistic/", ""))) {

            extendedRules[ruleKey] = "off";
            extendedRules[ruleKey.replace("@stylistic/", "@typescript-eslint/")] = rules[ruleKey];

        }
        else if (tsExtendedRulesKeys.includes(ruleKey)) {

            extendedRules[ruleKey] = "off";
            extendedRules["@typescript-eslint/" + ruleKey] = rules[ruleKey];

        }

    });

// modules

module.exports = {

    "plugins": {
        "@typescript-eslint": typescriptEslint
    },

    "parser": typescriptParser,

    "languageOptions": {

        "parserOptions": {
            "projectService": true
        },

        "globals": {
            "BufferEncoding": true
        }

    },

    "rules": {

        // [extended rules]

        ...extendedRules,
        "no-duplicate-imports": "warn", // [warn] should not be used, but tolerated (specific to TS, for component/types separation)
        "no-implicit-globals": "off", // [off] can be global to be exported

        // [original rules]

        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array-simple"
            }
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-tslint-comment": "error",
        "@typescript-eslint/class-literal-property-style": "error",
        "@typescript-eslint/consistent-generic-constructors": [ "error", "type-annotation" ],
        "@typescript-eslint/consistent-indexed-object-style": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/explicit-module-boundary-types": [
            "error",
            {
                "allowArgumentsExplicitlyTypedAsAny": true // managed by @typescript-eslint/no-explicit-any
            }
        ],
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "default": [
                    "signature",
                    "field",
                    "constructor",
                    "method"
                ]
            }
        ],
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/naming-convention": "off", // [off] too complex & restrictive to be used
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "off", // [off] we can want to return a "resolve" or "reject" value (void)
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "@typescript-eslint/no-duplicate-type-constituents": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-inferrable-types": "off", // [off] all var must be typed
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-meaningless-void-operator": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-mixed-enums": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-redundant-type-constituents": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "off", // [off] all var must be typed
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unsafe-enum-comparison": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-unsafe-unary-minus": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "off", // [off] verbose way is more readable
        "@typescript-eslint/parameter-properties": "error",
        "@typescript-eslint/prefer-as-const": "off", // [off] never meet this case
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-for-of": "warn", // [warn] depend of the context
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-namespace-keyword": "off", // [off] outdated rule
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-readonly-parameter-types": "off", // [off] generate false positives
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": "off", // [off] conflict with "require-await" rule when into promise method
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/sort-type-constituents": "off", // [off] can be clearer to read to sort non-alphabetically (=> ParentClass | ChildClass)
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/typedef": "error",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "error"

        // [Deprecated]

        // "@typescript-eslint/member-delimiter-style": "error", => @stylistic/ts/member-delimiter-style
        // "@typescript-eslint/no-dupe-class-members",
        // "@typescript-eslint/no-invalid-this",
        // "@typescript-eslint/no-redeclare",
        // "@typescript-eslint/no-type-alias": "error" => @typescript-eslint/consistent-type-definitions
        // "@typescript-eslint/quotes": "error", => @stylistic/ts/quotes
        // "@typescript-eslint/type-annotation-spacing": "error",

    }

};
