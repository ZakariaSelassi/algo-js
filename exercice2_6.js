const readlineSync = require("readline-sync");

let nb = new Number(readlineSync.question("Saisir un nombre entre 1 et 7 : "));
while (nb < 1 || nb > 7) {
    console.log("fait un effort.. le nombre est pas compris entre 1 et 7");
    nb = new Number(readlineSync.question("Saisir un nombre entre 1 et 7 : "));
}

console.log("Bravo tu es enfin sortie de cette boucle...");
console.log("le nombre à vérifi est : " + nb);
switch (nb) {
    case 1:
        console.log("Jour : " + nb + " = " + "lundi");
        break;
    case 2:
        console.log("Jour : " + nb + " = " + "mardi");
        break;
    case 3:
        console.log("Jour : " + nb + " = " + "mercredi");
        break;
    case 4:
        console.log("Jour : " + nb + " = " + "jeudi");
        break;
    case '5':
        console.log("Jour : " + nb + " = " + "vendredi");
        break;
    case '6':
        console.log("Jour : " + nb + " = " + "samedi");
        break;
    case '7':
        console.log("Jour : " + nb + " = " + "dimanche");
        break;
    default:
        console.log("tu fais aucun effort, j'arrete..");
}