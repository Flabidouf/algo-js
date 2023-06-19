const readlineSync = require("readline-sync");

function askTvSerie() {
    // This const is defined empty, we will add the name, production year and any new cast members the user decides.
    // The {} makes it an object.
   const tvSerie = {};

    // *name of a "parent" const* . *name of new variable* initializes in the former a new variable. 
    // We ask the user for the variable name, and create it through the first part of the code line.
    // These will be contained in tvSerie.
    tvSerie.name = readlineSync.question('Give me your favorite serie, human ');
    tvSerie.productionYear = readlineSync.question('Give me the production year of the serie, human ');
    tvSerie.castMembers= [];
    
    let moreCastMembers = true;
    while (moreCastMembers) {

        const userInputCastMembers = readlineSync.question('Give me the cast, human '); 
        if (userInputCastMembers !== "") {
            tvSerie.castMembers.push(userInputCastMembers);
        } else {
            moreCastMembers = false;
        }
    }

    return tvSerie;

}

let userAnswer = askTvSerie();
console.log(userAnswer)