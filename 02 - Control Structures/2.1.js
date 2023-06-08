const readlineSync = require("readline-sync");

let age = new Number(readlineSync.question('Give me your age'));

if (age>18) {
    console.log("You're an adult");
} else {
    console.log("Yer not yet an adult boy");
}