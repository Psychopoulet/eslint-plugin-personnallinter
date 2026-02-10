import type { Linter } from "eslint";

interface PersonnalLinterPlugin {
    meta: {
        name: string;
        version: string;
        namespace: "personnallinter";
    };
    configs: {
        "js-front": Linter.FlatConfig;
        "js-back": Linter.FlatConfig;
        "ts-front": Linter.FlatConfig;
        "ts-back": Linter.FlatConfig;
        "react": Linter.FlatConfig;
    };
}

declare const plugin: PersonnalLinterPlugin;

export = plugin;
