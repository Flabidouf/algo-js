const readlineSync = require("readline-sync");

let name = new String(readlineSync.question('What is your name ?'));

console.log("Hello "+ name)