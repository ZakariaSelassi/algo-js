const readlineSync = require("readline-sync");


let min = new Number(readlineSync.question("Entrer un nombre min: "));
let max = new Number(readlineSync.question("Entrer un nombre max: "));
let current = new Number(readlineSync.question("Entrer un nombre current: "));
do {

    if (current >= min && current <= max) {
        console.log("votre nombre est compris entre : " + min + " et " + max);
    } else if (current > max) {
        console.log("Tu comprends rien...");
        current = new Number(readlineSync.question("Entrer un nombre entre le min et le max: "));

    } else {
        console.log("votre nombre n'est pas compris entre  : " + min + " et " + max);
        current = new Number(readlineSync.question("Entrer un nombre current: "));
    }
} while (current < min || current > max);

console.log("C'est bien tu es sortie de la boucle");