class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if (this.topLeftXPos === otherRectangle.topLeftXPos || this.topLeftYPos === otherRectangle.topLeftYPos || this.width === otherRectangle.width || this.length === otherRectangle.length) {
            return true;
        } else {
            return false;
        }
    }
}

let rect1 = new Rectangle(2, 2, 3, 4);
let rect2 = new Rectangle(5, 5, 5, 2);

console.log(rect1.collides(rect2));