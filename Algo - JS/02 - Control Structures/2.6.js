const readlineSync = require("readline-sync");

let day = new Number(readlineSync.question('Give me a number between 1 and 7, human '));

if ((day < 1) || (day >7 )) {
    console.log("I think you're not listening to what I'm saying.")
} else if (day == 1 ) {
    console.log("Monday");
} else if (day == 2 ) {
    console.log("Tuesday");
} else if (day == 3 ) {
    console.log("Wednesday");
} else if (day == 4 ) {
    console.log("Tuesday");
} else if (day == 5 ) {
    console.log("Friday");
} else if (day == 6 ) {
    console.log("Saturday");
} else  {
    console.log("Sunday");
}






