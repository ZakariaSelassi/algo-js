function rand10(alea) {
    alea = Math.random() * (10 - 1) + 1;

    return alea;
}

console.log(Math.floor(rand10()));