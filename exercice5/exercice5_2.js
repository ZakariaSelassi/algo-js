const readlineSync = require("readline-sync");
let myObject = {
    name: "",
    annee: 0,
    actor: []
};

function askTvserie(myObject) {
    myObject.name = readlineSync.question("What's your favorit serie ?");
    myObject.annee = Number(readlineSync.question("What's the years of realisation ?"));
    let n = Number(readlineSync.question("nombre d'acteur"));
    for (let i = 0; i < n; i++) {

        a = readlineSync.question("What's your favorit actors ? ");

        myObject.actor.push(Math.floor(Math.random(a) - a[n - 1]));
    }
    return myObject;
}
console.log(askTvserie(myObject));