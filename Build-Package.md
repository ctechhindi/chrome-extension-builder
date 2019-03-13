## Build and Publish an npm First Package

[LINK 1](https://medium.com/the-andela-way/build-and-publish-your-first-npm-package-a4daf0e2431)

### SETUP

Create an empty directory and initialize it as a npm package using `npm init` or `npm init --yes`, if you're feeling lazy. It will ask you to create your `package.json` file.

```
# Create the project directory
mkdir random-number-generator 

# Change into the project directory
cd random-number-generator     

# Initialise an NPM package
npm init
```

Let's start creating our script file `index.js`

```js
exports.init = function() {
    const jsonfile = require('jsonfile');
    const file = './package.json'
    jsonfile.readFile(file, function (err, obj) {
    if (err) console.error(err)
        console.dir(obj.version);
    })
}
```

[How to start main index.js from my package.json file](https://stackoverflow.com/questions/53890273/how-to-start-main-index-js-from-my-package-json-file)

Publish Package

```
npm login
npm publish
```

Create a build.js file and run this file `node build.js`

```js
var repeat = require('chrome-extension-builder');
repeat.init();
```

* `Test your new NPM module without publishing it`
* Create a new file package current directory `example.js`

```js
var foo = require('./index')
foo
```