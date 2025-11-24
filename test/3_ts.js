// deps

    // natives
    const { join } = require("node:path");

    // locals
    const executeTests = require(join(__dirname, "utils", "executeTests.js"));

// tests

describe("ts", () => {

    describe("front", () => {

        executeTests("npx eslint -c ./test/eslintrc/2-1_ts-front.js --ext .ts,.cts ./test/patterns/2_ts.ts");

    });

    describe("back", () => {

        executeTests("npx eslint -c ./test/eslintrc/2-2_ts-back.js --ext .ts,.cts ./test/patterns/2_ts.ts");

    });

});
