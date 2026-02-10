/// <reference path="../../lib/cjs/main.d.cts" />

"use strict";

// deps

	// locals
	import personnallinter from "../../lib/cjs/main.cjs";

// module

console.log(personnallinter.meta);
console.log("js-back", personnallinter.configs["js-back"]);
console.log("ts-front", personnallinter.configs["ts-front"]);
console.log("ts-back", personnallinter.configs["ts-back"]);
console.log("react", personnallinter.configs["react"]);
