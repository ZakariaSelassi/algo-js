const readlineSync = require("readline-sync");

/*Exercice 7.2 - Nombres de Fibonacci
Créez un programme qui demande un entier n et génère les n premiers nombres de Fibonacci.

Oui, vous devrez rechercher quels sont les nombres de Fibonacci. */

let n = Number(readlineSync.question("Enter a number : "));

console.log("Your number is : " + n);
let n1 = 0;
let n2 = 1;
let temp = 1;
for (let i = 2; i < n; i++) {
    temp = n1 + n2;
    n1 = n2;
    n2 = temp
    console.log((n1));

}