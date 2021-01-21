const readlineSync = require("readline-sync");
/*Créez un programme qui génère un entier entre 1 et 100 (ne l'affichez pas à l'utilisateur).

Ensuite, le programme doit afficher "Devinez le nombre" et demander à l'utilisateur de deviner. Si l'utilisateur entre un nombre trop bas, il doit afficher "Trop bas" et poser à nouveau la question. Si l'utilisateur entre un nombre trop élevé, il doit afficher «Trop élevé» et poser à nouveau la question. Si l'utilisateur devine correctement, il doit afficher "Bien deviné!" et sortir. */
let n;
for (let i = 0; i < 1; i++) {
    n = Math.floor(Math.random() * (10 - 1) + 1);
}
console.log("number to guess" + n);

let guessN;
do {
    guessN = Number(readlineSync.question("Not to good one ! Guess the number : "));
    if (guessN < n) {
        console.log("too low");
    } else if (guessN > n) {
        console.log("too high");


    }

} while (guessN != n);

console.log("YEAHH you guess right !");