
// Math.random is a method that returns pseudo-random number that's greater than or equal to 0 and less than 1. 
// Here we use (max - min +1) so that the max is included.
// Here, (max - min +1)) + min, the second min is used to delineate the interval. Here between 1 and 10.
// Math.floor is used to get integer numbers. Without it, decimals would be included.

function rand10(min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min
}

console.log(rand10(1,10))