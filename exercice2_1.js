const readlineSync = require("readline-sync");



let age = new Number(readlineSync.question("Enter your age : "));
if (age >= 18) {
    console.log("Vous etes majeur !");
} else {
    console.log("Vous etes mineur !");
}