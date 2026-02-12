// deps

    // natives
    const { join } = require("node:path");
    const { readFileSync } = require("node:fs");

    // locals
    const jsFront = require(join(__dirname, "configs", "js-front.js"));
    const jsBack = require(join(__dirname, "configs", "js-back.js"));
    const tsFront = require(join(__dirname, "configs", "ts-front.js"));
    const tsBack = require(join(__dirname, "configs", "ts-back.js"));
    const react = require(join(__dirname, "configs", "react.js"));

// consts

    const { name, version } = JSON.parse(readFileSync(join(__dirname, "..", "..", "package.json")));

// module

module.exports = {

    "meta": {
		"name": name,
		"version": version,
        "namespace": "personnallinter"
	},

    "configs": {

        "js-front": jsFront,
        "js-back": jsBack,
        "ts-front": tsFront,
        "ts-back": tsBack,
        "react": react

    }

};
