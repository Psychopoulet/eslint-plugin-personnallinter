// deps

    // natives
    const assert = require("node:assert");
    const { join } = require("node:path");

    // locals
    const extendTypescriptRules = require(join(__dirname, "..", "lib", "cjs", "configs", "commons", "extendTypescriptRules.js"));
    const { "rules": tsRules } = require(join(__dirname, "..", "lib", "cjs", "configs", "commons", "ts.js"));

// tests

describe("extend typescript rules", () => {

    it("should remap node, stylistic and core rules that typescript-eslint extends", () => {

        const extended = extendTypescriptRules({
            "n/no-unused-vars": "error",
            "n/no-sync": "warn",
            "@stylistic/semi": [ "error", "always" ],
            "@stylistic/quotes": "error",
            "no-shadow": "error",
            "no-var": "error"
        }, [
            "no-unused-vars",
            "semi",
            "no-shadow"
        ]);

        assert.deepStrictEqual(extended, {
            "n/no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "error",
            "@stylistic/semi": "off",
            "@typescript-eslint/semi": [ "error", "always" ],
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": "error"
        });

    });

    it("should keep the published remap for no-unused-vars", () => {

        assert.strictEqual(tsRules["no-unused-vars"], "off");
        assert.strictEqual(tsRules["@typescript-eslint/no-unused-vars"], "error");

    });

});
