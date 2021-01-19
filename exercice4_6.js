const readlineSync = require("readline-sync");

function saisir() {
    n = new Number(readlineSync.question("entrer nombre :"));
}

function factorial(n) {
    if (n < 0) {
        console.log("votre nombre n'est pas plus grand ou = à 0");
    } else if (n == 0) {
        return 1;

    } else {
        return (n * factorial(n - 1));
    }
}

saisir();
console.log(factorial(n));