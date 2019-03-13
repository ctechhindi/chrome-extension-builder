# chrome-extension-builder

[![NPM](https://nodei.co/npm/chrome-extension-builder.png)](https://nodei.co/npm/chrome-extension-builder/)

## Installation

```bash
$ npm install --save chrome-extension-builder
$ npm install --save chrome-extension-builder@version
```

Now, create *`build.js`* file in current folder

```js
var repeat = require('chrome-extension-builder');

// Extension Full Folders Copy
var projectFolders = [
  "fonts",
  "img",
];

// Extension Files
var projectFiles = [
  "css/buefy.min.css",
  "css/custom.min.css",
  "css/jquery-ui.min.css",
  "css/materialdesignicons.min.css",
];

repeat.init({
  version: "0.0.2",
  basePath: __dirname,
  folders: projectFolders,
  files: projectFiles,
  dev: true // by default false
});
```

Execute `build.js` file

```cmd
node build.js
```

## License

[MIT License](https://github.com/ctechhindi/chrome-extension-builder/blob/master/LICENSE)