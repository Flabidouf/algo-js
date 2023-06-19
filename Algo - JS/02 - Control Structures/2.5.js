const readlineSync = require("readline-sync");

let favNum = new Number(readlineSync.question('Give me your favorite number, human '));

// Ici, le break est nécessaire pour stopper la boucle !
while (favNum != 42) {
    console.log("Are you sure ?");
    let favNum = new Number(readlineSync.question('Give me your favorite number, human '));
 if (favNum == 42) {
    console.log("I guess that's an ok number to be one's favourite");
    break
    }
}