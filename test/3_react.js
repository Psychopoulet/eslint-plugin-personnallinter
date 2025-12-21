// deps

    // natives
    const { join } = require("node:path");

    // locals
    const executeTests = require(join(__dirname, "utils", "executeTests.js"));

// tests

describe("react", () => {

    executeTests("npx eslint -c ./test/eslintrc/3_react.js --ext .ts,.cts,.tsx ./test/patterns/3_react.tsx");

});
