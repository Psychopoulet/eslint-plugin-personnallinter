# eslint-plugin-personnallinter

[![Issues](https://img.shields.io/github/issues/Psychopoulet/eslint-plugin-personnallinter.svg)](https://github.com/Psychopoulet/eslint-plugin-personnallinter/issues)
[![Pull requests](https://img.shields.io/github/issues-pr/Psychopoulet/eslint-plugin-personnallinter.svg)](https://github.com/Psychopoulet/eslint-plugin-personnallinter/pulls)
[![Known Vulnerabilities](https://snyk.io/test/github/Psychopoulet/eslint-plugin-personnallinter/badge.svg)](https://snyk.io/test/github/Psychopoulet/eslint-plugin-personnallinter)

## BREAKING CHANGES !!

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

## Tests

```bash
$ npm run tests
```

## License

  [ISC](LICENSE)
