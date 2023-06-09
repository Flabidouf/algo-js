const readlineSync = require("readline-sync");

let length = new Number(readlineSync.question('Give me length, human '));
let width = new Number(readlineSync.question('Give me width, human '));


function calcSurface (length,width) {
    return length*width;
}

console.log(calcSurface(length,width));