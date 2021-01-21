const readlineSync = require("readline-sync");

let nb1 = new Number(readlineSync.question("Enter le premier nombre decimal : "));
Math.trunc(nb1);
let nb2 = new Number(readlineSync.question("Enter le deuxieme nombre decimal : "));

let multiply = nb1 * nb2;

console.log("nombre 1 " + nb1);
console.log("nombre 2 " + nb2);
console.log("nb1 * nb2 " + " = " + multiply);