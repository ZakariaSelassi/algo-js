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
    afficher() {
        for (let i = 0; i < 1000; i++) {
            rect2 = new Rectangle(
                Math.floor(Math.random() * (10 - 1) + 1),
                Math.floor(Math.random() * (10 - 1) + 1),
                Math.floor(Math.random() * (10 - 1) + 1),
                Math.floor(Math.random() * (10 - 1) + 1)
            );
            console.log(rect2);
            console.log(rect1.collides(rect2));
        }
        return rect2;
    }

}
let rect1 = new Rectangle(1, 2, 3, 2);
let rect2 = new Rectangle();

console.log(rect1.afficher());