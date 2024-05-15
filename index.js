// local module

const {a, add} = require("./local-1")
const {a:a2, add:add2} = require("./local-1")


console.log(add(20, 30));

// built-in-module
const path = require("path")
console.log(path.parse("C:/p.hero/level-2/learning-node/index.js"));
