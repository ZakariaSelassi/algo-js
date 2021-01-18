const readlineSync = require("readline-sync");

let nb1 = new Number(readlineSync.question("Enter le premier nombre  : "));

let nb2 = new Number(readlineSync.question("Enter le deuxieme nombre : "));

let division = Math.floor(nb1 / nb2);


console.log(division);