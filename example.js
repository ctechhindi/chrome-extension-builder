var buildExtension = require('./index');

var projectFolders = [
  "fonts",
  "img",
];

var projectFiles = [
  "css/buefy.min.css",
  "css/custom.min.css",
  "css/jquery-ui.min.css",
  "css/materialdesignicons.min.css",
];

buildExtension.init({
  version: "0.0.2",
  basePath: __dirname,
  folders: projectFolders,
  files: projectFiles,
  // dev: true,
});
