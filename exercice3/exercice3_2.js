let myArray = [1, 2, 3, 4, 5];
let calculateMoy = 0;
let somme = 0;
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    somme = somme + myArray[i];
}
calculateMoy = somme / myArray.length;
console.log("somme = " + somme + " moyenne = " + calculateMoy);