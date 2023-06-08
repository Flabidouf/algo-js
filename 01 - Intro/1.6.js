const readlineSync = require("readline-sync");

let number1 = new Number(readlineSync.question('Give me an intenger number'));

let number2 = new Number(readlineSync.question('Give me another integer number'));

console.log((number1%number2)) 