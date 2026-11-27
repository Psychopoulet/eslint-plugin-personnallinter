// deps

    // natives
    const { lstat } = require("node:fs");
    const { unlink } = require("node:fs/promises");
    const { exec } = require("node:child_process");
    const { join } = require("node:path");

// tests

describe("compilation typescript", () => {

    const compilationConfig = join(__dirname, "typescript", "tsconfig.json");
    const compilationTarget = join(__dirname, "typescript", "compilation.cjs");

    before(() => {

        return new Promise((resolve) => {

            lstat(compilationTarget, (err, stats) => {
                return resolve(Boolean(!err && stats.isFile()));
            });

        }).then((exists) => {
            return exists ? unlink(compilationTarget) : Promise.resolve();
        });

    });

    after(() => {

        return new Promise((resolve) => {

            lstat(compilationTarget, (err, stats) => {
                return resolve(Boolean(!err && stats.isFile()));
            });

        }).then((exists) => {
            return exists ? unlink(compilationTarget) : Promise.resolve();
        });

    });

    it("should compile typescript file", () => {

        return new Promise((resolve, reject) => {

            const args = [
                "bunx tsc",
                "--project",
                compilationConfig
            ];

            exec(args.join(" "), {
                "cwd": join(__dirname, ".."),
                "windowsHide": true
            }, (err) => {
                return err ? reject(err) : resolve();
            });

        });

    });

    it("should exec compiled typescript file", (done) => {

        const args = [
            "bun",
            compilationTarget
        ];

        exec(args.join(" "), {
            "cwd": join(__dirname, ".."),
            "windowsHide": true
        }, (err) => {
            return err ? done(err) : done();
        });

    });

});
