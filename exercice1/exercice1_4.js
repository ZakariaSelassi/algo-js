const readlineSync = require("readline-sync");

let firstName = readlineSync.question("Enter your first name : ");
let lastName = readlineSync.question("Enter your lastname : ");
let city = readlineSync.question("Enter your city : ");

console.log("Hello " + firstName + " " + lastName + " your city : " + city);