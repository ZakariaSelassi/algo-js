const readlineSync = require("readline-sync");

let nb = new Number(readlineSync.question("Votre nombre favori : "));

do {
    console.log("Etes-vous sur ?");
    nb = new Number(readlineSync.question("Votre nombre favori : "));

} while (nb != 42);