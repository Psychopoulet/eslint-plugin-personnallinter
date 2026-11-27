// deps

    // natives
    const assert = require("node:assert");
    const { join } = require("node:path");

    // locals
    const plugin = require(join(__dirname, "..", "lib", "cjs", "main.cjs"));

// tests

describe("plugin export", () => {

    it("should export an object with meta and configs", () => {

        assert.strictEqual(typeof plugin, "object");
        assert.notStrictEqual(plugin, null);
        assert.ok("meta" in plugin, "Plugin export must have a meta property");
        assert.ok("configs" in plugin, "Plugin export must have a configs property");

    });

    it("meta should have name, version and namespace", () => {

        const { meta } = plugin;

        assert.strictEqual(typeof meta, "object");
        assert.notStrictEqual(meta, null);
        assert.strictEqual(typeof meta.name, "string");
        assert.strictEqual(typeof meta.version, "string");
        assert.strictEqual(meta.namespace, "personnallinter");

    });

    it("configs should have js-front, js-back, ts-front, ts-back, react", () => {

        const { configs } = plugin;
        const required = [
            "js-front",
            "js-back",
            "ts-front",
            "ts-back",
            "react"
        ];

        for (const key of required) {

            assert.ok(key in configs, "configs must have \"" + key + "\"");
            assert.strictEqual(typeof configs[key], "object");
            assert.notStrictEqual(configs[key], null);

        }
    });

});
