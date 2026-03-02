# eslint-plugin-personnallinter

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Psychopoulet_eslint-plugin-personnallinter&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Psychopoulet_eslint-plugin-personnallinter)
[![Issues](https://img.shields.io/github/issues/Psychopoulet/eslint-plugin-personnallinter.svg)](https://github.com/Psychopoulet/eslint-plugin-personnallinter/issues)
[![Pull requests](https://img.shields.io/github/issues-pr/Psychopoulet/eslint-plugin-personnallinter.svg)](https://github.com/Psychopoulet/eslint-plugin-personnallinter/pulls)

[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Psychopoulet_eslint-plugin-personnallinter&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Psychopoulet_eslint-plugin-personnallinter)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Psychopoulet_eslint-plugin-personnallinter&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Psychopoulet_eslint-plugin-personnallinter)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Psychopoulet_eslint-plugin-personnallinter&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Psychopoulet_eslint-plugin-personnallinter)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Psychopoulet_eslint-plugin-personnallinter&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Psychopoulet_eslint-plugin-personnallinter)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Psychopoulet_eslint-plugin-personnallinter&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Psychopoulet_eslint-plugin-personnallinter)

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
