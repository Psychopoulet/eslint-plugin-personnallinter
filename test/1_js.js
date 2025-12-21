// deps

    // natives
    const { join } = require("node:path");

    // locals
    const executeTests = require(join(__dirname, "utils", "executeTests.js"));

// tests

describe("js", () => {

    describe("front", () => {

        executeTests("npx eslint -c ./test/eslintrc/1-1_js-front.js --ext .js,.cjs ./test/patterns/1_js.js");

    });

    describe("back", () => {

        executeTests("npx eslint -c ./test/eslintrc/1-2_js-back.js --ext .js,.cjs ./test/patterns/1_js.js");

    });

});
