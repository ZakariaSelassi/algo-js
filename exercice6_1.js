class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface() {

        return Math.PI * (this.radius * this.radius);
    }
    move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
}

let myobject = new Circle(1, 2, 3);
console.log(myobject);
myobject.move(5, 4);
console.log(myobject);