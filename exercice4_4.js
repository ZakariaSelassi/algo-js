const readlineSync = require("readline-sync");


function saisir() {
    n = new Number(readlineSync.question("Entrer un nombre de nombre aleatoire a générer : "));
    return n;
}

function multiRand(n) {

    let array = [];

    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * (10 - 1) + 1));
    }
    return array.slice();
}

function average(array) {

    let somme = 0;
    let average = 0;
    for (let i = 0; i < n; i++) {
        somme = somme + array[i];
    }

    average = somme / n;
    return average;
}


function min(array) {

    array = Math.min.apply(Math, array);
    console.log("minimum : " + array);

    return array;
}

function max(array) {

    array = Math.max.apply(Math, array);
    console.log(" maximum : " + array);
    /*let max = Math.max.apply(Math, array);
    let max = Math.max(...array);*/
    return array;
}
let b = saisir();

/* let array = multiRand car fonction qui génére le tableau et vue qu'on a besoin d'utiliser le meme pour 3 fonctions differents voila.. */
let array = multiRand(n);

console.log(b);
console.log(array);
console.log("****** average ******");
console.log(average(array));
console.log("****** nombre min ******");
console.log(min(array));
console.log("****** nombre max ******");
console.log(max(array));