const readlineSync = require("readline-sync");



/*function askTvserie(serieName, year, actorName) {
    this.serieName = readlineSync.question("What's your favorit serie ?");
    this.year = Number(readlineSync.question("What's the years of realisation ?"));
    for(let i=0; i<n; i++)
    {
        
    }
    this.actorName = readlineSync.question("What's your favorit actors ? ");
}
let serieName, year, actorName = new Array(2);
let myObject = new askTvserie(serieName, year, actorName);
console.log(myObject);*/
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
        /*Question pour arnaud */
        a = readlineSync.question("What's your favorit actors ? ");
        myObject.actor.push(a);
    }


    return myObject;
}
console.log(askTvserie(myObject));