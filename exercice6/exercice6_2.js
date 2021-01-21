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

}

let rect1 = new Rectangle(1, 2, 2, 2);
let rect2 = new Rectangle(3, 2, 1, 3);


console.log(rect1.collides(rect2));