class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if (this.topLeftXPos === otherRectangle.topLeftXPos || this.topLeftYPos === otherRectangle.topLeftYPos || this.width === otherRectangle.length || this.length === otherRectangle.width) {
            return true;
        } else {
            return false;
        }
    }
    initRec() {

        for (let i = 0; i < 1000; i++) {

            topLeftXPos = Math.random() * (10 - 1) + 1;
            topLeftYPos = Math.random() * (10 - 1) + 1;
            width = Math.random() * (10 - 1) + 1;
            length = Math.random() * (10 - 1) + 1;
        }
        return topLeftXPos, topLeftYPos, width, length;
    }

    afficher() {
        let array = [];
        for (let i = 0; i < 1000; i++) {

            array.push(topLeftXPos, topLeftYPos, width, length);


        }
        return array;
    }
}

let rect1 = new Rectangle();
let topLeftXPos, topLeftYPos, width, length;
rect1.initRec();
console.log(rect1.initRec());
console.log(rect1.afficher());