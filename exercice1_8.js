const readlineSync = require("readline-sync");
let nb = 3;
let name = readlineSync.question("What's your name  ? ");
console.log("number of remaining question : " + nb--);

let dob = new Date(readlineSync.question("What's your dob ? "));
console.log("number of remaining question : " + nb--);

let city = readlineSync.question("What's your city ? ");
console.log("number of remaining question : " + nb--);

let food = readlineSync.question("What's your favorit food ? ");
console.log("number of remaining question : " + nb--);


console.log(name + " dob " + dob + " at " + city + " your favorit food is " + food);