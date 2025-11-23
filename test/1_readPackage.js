// deps

    // natives
    const { join } = require("node:path");
    const { strictEqual } = require("node:assert/strict");

    // locals
    const readPackage = require(join(__dirname, "..", "lib", "cjs", "utils", "readPackage.js"));
    const { name, version } = require(join(__dirname, "..", "package.json"));

// tests

describe("utils/readPackage", () => {

    it("should have the right version", () => {

        const data = readPackage();

        strictEqual(typeof data, "object");
        strictEqual(0 < Object.keys(data).length, true);
        strictEqual(data.name, name);
        strictEqual(data.version, version);

    });

});
