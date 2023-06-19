const readlineSync = require("readline-sync");

let minAge = new Number(readlineSync.question('Give me a minimum age'));

let maxAge = new Number(readlineSync.question('Give me a maximum age'));



if (minAge > maxAge) {
    console.log("Error. Yer competence at understanding simple requests seems to be compromised. Please read the instructions.")
} else {
    let currentAge = new Number(readlineSync.question('Give me yer actual age'));
}


if ((minAge < currentAge) && (currentAge < maxAge)) {
    console.log(minAge + " > " + currentAge + " < " + maxAge);
} 