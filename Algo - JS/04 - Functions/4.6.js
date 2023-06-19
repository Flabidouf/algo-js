// This one is tricky.
// First, for fun, initialize a question asked to the user.
// It will ask a number to define our variable a
const readlineSync = require("readline-sync");

let a = new Number(readlineSync.question('Give me a number, human'));


// Definition for factorial is : 
// In mathematics, the factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.

// So we can create the function factorial(a) and then create an if loop within.
// While a (our earlier initialized variable) is bigger than 0, multiply a with factoria(a-1).
// This will cause the funciton to loop itself (recursivity). 
// If we say a=3, it will check if 3 > 0 then do 3 * factorial(3-1).
// Which will result in the same operation, but our variable a has been diminished by 1 through each loop.


// We end it with an else that returns 1, when a = 0. I don't really know how to explain this part.
function factorial(a) {
    if (a>0) {
    return a * factorial(a-1);
    }
    else {
        return 1
    }

}

console.log(factorial(a))