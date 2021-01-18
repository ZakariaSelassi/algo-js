const readlineSync = require("readline-sync");

let somme = 0;
let n = Number(readlineSync.question("Enter a number to start : "));

for (let i = 0; i < n; i++) {

    let nb = Number(readlineSync.question("Enter a number : "));
    somme = somme + nb;


}

console.log("total : " + somme);