const readlineSync = require("readline-sync");

let name = new String(readlineSync.question('What is your name ?'));

let firstName = new String(readlineSync.question('What is your first name ?'));

let city = new String(readlineSync.question('Whhere do you live ?'));

console.log("Your name is " + firstName + " "+ name + " and you live in " + city + ".")