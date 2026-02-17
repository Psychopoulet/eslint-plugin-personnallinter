// deps

    // natives
    const { join } = require("node:path");
    const { exec } = require("node:child_process");

// module

module.exports = function executeTests (cmd) {

    it(cmd, () => {

        return new Promise((resolve, reject) => {

            exec(cmd, {
                "cwd": join(__dirname, "..", "..")
            }, (err, stdout, stderr) => {

                if (!err) {
                    reject(new Error("No error generated"));
                }

                else if (stderr?.startsWith("n/Oops! Something went wrong!")) {
                    reject(new Error(stderr.trim()));
                }

                else if (!stdout?.includes("no-unused-vars") && !stdout?.includes("@typescript-eslint/no-unused-vars")) {
                    reject(new ReferenceError("No \"no-unused-vars\" or \"@typescript-eslint/no-unused-vars\" error generated"));
                }
                else if (!stdout?.includes("no-var")) {
                    reject(new ReferenceError("No \"no-var\" error generated"));
                }

                else if (!stdout?.includes("n/callback-return")) {
                    reject(new ReferenceError("No \"n/callback-return\" error generated"));
                }

                else if (!stdout?.includes("@stylistic/array-bracket-newline")) {
                    reject(new ReferenceError("No \"@stylistic/array-bracket-newline\" error generated"));
                }
                else if (!stdout?.includes("@stylistic/no-mixed-spaces-and-tabs")) {
                    reject(new ReferenceError("No \"@stylistic/no-mixed-spaces-and-tabs\" error generated"));
                }
                else if (!stdout?.includes("@stylistic/no-multi-spaces")) {
                    reject(new ReferenceError("No \"@stylistic/no-multi-spaces\" error generated"));
                }
                else if (!stdout?.includes("@stylistic/quotes")) {
                    reject(new ReferenceError("No \"@stylistic/quotes\" error generated"));
                }

                else {
                    resolve();
                }

            });

        });

    }).timeout(10 * 1000);

};
