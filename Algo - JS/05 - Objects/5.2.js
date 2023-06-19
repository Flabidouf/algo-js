const readlineSync = require("readline-sync");

function askTvSerie() {
    // This const is defined empty, we will add the name, production year and any new cast members the user decide.
   const tvSerie = {};

    // *name of a "parent" const* . *name of new variable* initializes in the former a new variable. 
    // We ask the user for the variable name, and create it through the first part of the code line.
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

function randomizeCast ( tvSerieRand ) {
    for (i = tvSerieRand.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
            [tvSerieRand[i], tvSerieRand[j]] = [tvSerieRand[j], tvSerieRand[i]];
     }   
     return tvSerieRand;
}

let serie = askTvSerie();
console.log(randomizeCast(serie))