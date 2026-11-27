
// module

module.exports = function extendTypescriptRules (rules, tsExtendedRulesKeys) {

    const extendedRules = {};

    Object.keys(rules).forEach((ruleKey) => {

        if (ruleKey.startsWith("n/") && tsExtendedRulesKeys.includes(ruleKey.replace("n/", ""))) {

            extendedRules[ruleKey] = "off";
            extendedRules[ruleKey.replace("n/", "@typescript-eslint/")] = rules[ruleKey];

        }
        else if (ruleKey.startsWith("@stylistic/") && tsExtendedRulesKeys.includes(ruleKey.replace("@stylistic/", ""))) {

            extendedRules[ruleKey] = "off";
            extendedRules[ruleKey.replace("@stylistic/", "@typescript-eslint/")] = rules[ruleKey];

        }
        else if (tsExtendedRulesKeys.includes(ruleKey)) {

            extendedRules[ruleKey] = "off";
            extendedRules["@typescript-eslint/" + ruleKey] = rules[ruleKey];

        }

    });

    return extendedRules;

};
