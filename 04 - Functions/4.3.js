
// All this within a function
// Here, we define a variable arrWithNums which will be an array.
// Then, with a for loop, we create a program that will randomly give numbers.  
// We define that n give the total number of elements in this array.
// Then we return the array.
// Last lines are for asking a number to the user.

function multiRand(n) {

    let arrWithNums = [];

    for(i=0; i<n; i++) {
        arrWithNums.push(Math.floor(Math.random() * 10));
    }
    return arrWithNums;
}

const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('Give me number, human '));


console.log(multiRand(n))


