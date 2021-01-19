function rand10(alea) {
    alea = Math.random() * (10 - 1) + 1;

    return Math.floor(alea);
}

function multiRand(n) {
    n = 5;
    let array = [];
    for (let i = 0; i < n; i++) {

        array.push(rand10());

    }
    return array;
}

console.log(multiRand());