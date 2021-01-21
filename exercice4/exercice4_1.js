const readlineSync = require("readline-sync");

function saisir() {
    largeur = new Number(readlineSync.question("Saisir un nombre pour la largeur : "));
    long = new Number(readlineSync.question("Saisire un nombre pour la long : "));
    return largeur, long;
}



function calculSurface(largeur, long) {

    return largeur * long;
}

console.log(saisir());
console.log(calculSurface(largeur, long));