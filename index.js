const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

try {
  const expoDoctorResult = await exec.exec("expo", ["doctor"]);

  console.log("Installed packages have the correct versions");
} catch (error) {
  core.setFailed(error.message);
}
