const readlineSync = require("readline-sync");

let nb = new Number(readlineSync.question("Votre nombre favori : "));

do {
    console.log("Etes-vous sur ?");
    nb = new Number(readlineSync.question("c'est pas bon , retente : "));

} while (nb != 42);

console.log("Bien joué..");