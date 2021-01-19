function calcDistance(x1, x2, y1, y2) {
    /* Permet de renvoyé la racine carrée */
    return Math.sqrt(((y2 - y1) * (y2 - y1)) + ((x2 - x1) * (x2 - x1)));
}

console.log(calcDistance(-2, 2, 2, -2));