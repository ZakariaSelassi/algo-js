const readlineSync = require("readline-sync");

let myFlavour = {
    name: [

    ],
};

function displayFlavor(myFlavour) {
    if (myFlavour.name == 0) {
        console.log("There is no flavour ! return to the menu to make your own !");
    } else if (myFlavour.name != 0) {
        console.log(myFlavour);
    }


}

function addFlavor(myFlavour) {
    let flavor;
    flavor = readlineSync.question("Add flavor : ");
    console.log(flavor);
    myFlavour.name.push(flavor);
    return myFlavour;
}

function deleteFlavor(myFlavour) {
    num = Number(readlineSync.question("What's flavor do you want to delete ? "));
    console.log(num);
    myFlavour.name = myFlavour.name.splice(num);
    console.log("Element :" + num + "has been delete");
    return myFlavour;
}

function menu() {
    let choix;
    console.log("Hello! Welcome to the Pizza Flavors Manager.\n");
    console.log("Please choose your actions :");
    console.log("1. - List all the pizza flavors");
    console.log("2 - Add a new pizza flavor");
    console.log("3 - Remove a pizza flavor");
    console.log("4 - exit this program");
    choix = Number(readlineSync.question("choice : "));
    return choix;
}
let choix;

do {

    choix = menu();
    switch (choix) {
        case 1:
            console.log("Hello choice 1");
            displayFlavor(myFlavour);
            break;
        case 2:
            console.log("Hello choice 2");
            addFlavor(myFlavour);
            break;
        case 3:
            console.log("Hello choice 3");
            deleteFlavor(myFlavour);
            break;
        case 4:
            console.log("Hello choice 4");
            break;
        default:
            console.log("You pressed 4 ! Bye.. ! ");
            break;
    }

} while (choix != 4);