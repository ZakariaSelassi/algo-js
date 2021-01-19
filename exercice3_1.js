let myArray = [1, 2, 3, 4, 5];
let myArray2 = [100, 101, 102];
let somme = 0;
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    somme = somme + myArray[i];
}
console.log("Somme : " + somme);
console.log("****** Tableau 2 *******");
somme = 0;
for (let i = 0; i < myArray2.length; i++) {
    console.log(myArray2[i]);
    somme = somme + myArray2[i];
}
console.log("Somme : " + somme);