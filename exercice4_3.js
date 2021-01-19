function rand10(alea) {
    alea = Math.random() * (10 - 1) + 1;

    return alea;
}

function multiRand(n) {
    for (let i = 0; i < n; i++) {
        n.rand10();
    }
}

console.log(multiRand());