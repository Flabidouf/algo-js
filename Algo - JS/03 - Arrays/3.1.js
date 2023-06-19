
/*
// Une façon de faire avec une loop for 
let numArray = [1, 2, 3, 4, 5];

// Je déclare une variable qui stockera le résultat cherché
let sum = 0;

for (let i=0; i < numArray.length; i++) {
// Revient à faire sum = sum + numArray
    sum += numArray[i];
}

console.log (sum)*/

// Calculer avec forEach()

let numArray = [1, 2, 3, 4, 5];

let sum = 0;

numArray.forEach( num => {
    sum += num; 
    }
)

console.log(sum)

let arr = [100, 101, 102];

let sumArr = 0;

arr.forEach(num => {
    sumArr += num;
})

console.log(sumArr)