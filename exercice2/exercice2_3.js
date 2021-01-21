const readlineSync = require("readline-sync");

let i = 0;
console.log("********** First **********");
while (i < 100) {
    i += 2;
    console.log(i);
}

/* Bonus */
console.log("********** Bonus **********");
for (let i = 0; i < 100; i += 2) {
    console.log(i);
}