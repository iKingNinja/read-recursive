# read-recursive.js
Recursively read all files in a directory and its subdirectories.

This package allows you to easily read all files in a directory and all its subdirectories.

# How to use the package
```js
const { read } = require("read-recursive.js");
const files = await read(__dirname);

console.log(files);
```