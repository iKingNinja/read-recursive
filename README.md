# read-recursive.js
Recursively read all files in a directory and its subdirectories.

This package allows you to easily read all files in a directory and all its subdirectories.

# How to use the package
```js
const { readSync } = require("read-recursive.js");
const files = readSync(__dirname);

console.log(files);
```