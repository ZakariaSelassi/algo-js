const readlineSync = require("readline-sync");
console.log("bonus");
let somme = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        somme = i / 2;
        console.log(somme);
    } else {
        somme = i * 3;
        console.log(somme);
    }
}