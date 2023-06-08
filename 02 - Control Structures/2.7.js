const readlineSync = require("readline-sync");

let N = new Number(readlineSync.question('Give me a number that we\'ll name n, human '));

let benoît=0;

for (let i=0; i < N; i++) {
    let X = new Number(readlineSync.question('Give me another number, human '));

    benoît+=X
}

console.log(benoît);

// Ici benoît commencera à 0, comme déclaré plus haut, et sera additionné à la variable X, déclarée plus haut et liée à une question.

// Ensuite, pour chaque itération de la loop for, benoît sera additionné avec la réponse à la question. Donc X sera ajouté à benoît (grâce au : benoît+=X).

// Quand i atteint la valeur N, la boucle à atteint son objectif, s'arrête et display le console.log



