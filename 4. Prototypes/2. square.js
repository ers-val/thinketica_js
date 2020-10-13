function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.area = () => {
        return this.height * this.width;
    };
    this.perimeter = () => {
        return (this.height * 2) + (this.width * 2);
    }
};

function Square(side) {
    //this.__proto__ = new Rectangle(side, side);
    Rectangle.call(this, side, side);
    Object.setPrototypeOf(this, Rectangle);
};

/* */
const test = new Rectangle(5, 6);
console.log(test.area());
console.log(test.perimeter());

const a = new Square(5);
console.log(a.area());
console.log(a.perimeter());