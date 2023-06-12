
const readlineSync = require("readline-sync");

function average(arr){
    if(arr.length === 0)
        return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

function min(arr) {
    if (arr.length === 0)
        return undifined
    return Math.min(...arr);
}
 
  function max(arr){
    if (arr.length === 0)
        return undefined;
    return Math.max(...arr);
}

function multiRand(n) {

    let result = [];

    for(let i=0; i<n; i++) {
        result.push(Math.floor(Math.random() * 10));
    }
    return result;
}


let n = new Number(readlineSync.question('Give me number, human '));
let randNum= multiRand(n);

let resultAv = average(randNum);

let minimum = min(randNum);
let maximum = max(randNum);

console.log(randNum);
console.log('Average:',resultAv);
console.log('Minimum:', minimum); 
console.log('Maximum:', maximum);
