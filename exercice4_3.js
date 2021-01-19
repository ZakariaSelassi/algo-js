const readlineSync = require("readline-sync");

function rand10(alea) {
    alea = Math.random() * (10 - 1) + 1;

    return Math.floor(alea);
}

function saisir() {
    n = new Number(readlineSync.question("Entrer un nombre de nombre aleatoire a générer : "));
    return n;
}

function multiRand(n) {

    let array = [];
    for (let i = 0; i < n; i++) {

        array.push(rand10());

    }
    return array;
}

console.log(saisir());
console.log(multiRand(n));