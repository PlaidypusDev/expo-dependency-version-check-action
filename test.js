const { exec } = require("child_process");

/**
 * {
 *  packageName: string;
 *  installedVersion: string;
 *  expectedVersion: string;
 * }
 */
const lineHasInvalidPackage = (line) =>
  exec("expo doctor", (error, stdout, stderr) => {
    const invalidPackages = [];

    if (error || stderr) {
      const splitError = stderr.split("\n");

      splitError.forEach((line) => {});
    }
  });
