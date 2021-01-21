const readlineSync = require("readline-sync");

/*Exercice 7.2 - Nombres de Fibonacci
Créez un programme qui demande un entier n et génère les n premiers nombres de Fibonacci.

Oui, vous devrez rechercher quels sont les nombres de Fibonacci. */

let n;

do {
    n = Number(readlineSync.question("Enter a number : "));
    if (n < 0) {

        console.log("Your number isn't positive ! check again..");
    } else if (n == 0) {

        console.log("Your number can't be 0 ! check again..");
    }


} while (n < 0 || n == 0);
console.log("Your number is : " + n);