const readlineSync = require("readline-sync");

let shoe = new Number(readlineSync.question("Enter shoe size  : "));

let dob = new Number(readlineSync.question("Enter dob : "));

let result = shoe * 2;
console.log(result);

result += 5;
console.log(result);