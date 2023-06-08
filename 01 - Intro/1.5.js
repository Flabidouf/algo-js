const readlineSync = require("readline-sync");

let number1 = new Number(readlineSync.question('Give me a number with decimal'));

let number2 = new Number(readlineSync.question('Give me another number with decimal'));

number1 = Math.trunc(number1)

console.log(number1 * number2)
