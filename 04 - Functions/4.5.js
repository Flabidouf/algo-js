const readlineSync = require("readline-sync");


// Asking numbers to the user in order to create 2 points (x1,y1; x2,y2)
let x1 = new Number(readlineSync.question('Give me x1, human '));
let y1 = new Number(readlineSync.question('Give me y1, human '));
let x2 = new Number(readlineSync.question('Give me x2, human '));
let y2 = new Number(readlineSync.question('Give me y2, human '));

// Calculating distance betwen a and b using math.hypot
function calcDistance () {
    // No need of those const because we ask them before.
    /*const a = x1 - x2;
    const b = y1 - y2;*/
    const resultDist = Math.hypot(x2-x1, y2-y1);
    return resultDist;
} 



console.log(calcDistance())