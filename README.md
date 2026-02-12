# personal-lint

BREAKING CHANGES !!

from 1.*.* to 2.*.*, the linter use now flat config
https://eslint.org/docs/latest/use/configure/migration-guide

for example :

```
module.exports = {
	"extends": [ "plugin:eslint-plugin-personnallinter/ts-back" ]
};
```

become

```
import { defineConfig } from "eslint/config";
import babelParser from "@babel/eslint-parser";

export default defineConfig({
    "plugins": {
        personnallinter
    },
    "extends": [ personnallinter.configs["ts-back"] ]
});
```
