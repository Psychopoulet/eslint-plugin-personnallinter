# personal-lint

BREAKING CHANGES !!

from 1.*.* to 2.*.*, the linter use now flat config
https://eslint.org/docs/latest/use/configure/migration-guide

for example :

```
module.exports = {
	// ...other config
	parser: "@babel/eslint-parser",
	// ...other config
};
```

become

```
import { defineConfig } from "eslint/config";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
	{
		// ...other config
		languageOptions: {
			parser: babelParser,
		},
		// ...other config
	},
]);
```
