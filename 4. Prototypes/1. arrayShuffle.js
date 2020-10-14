let array = [1, 2, 3, 4];

console.log(
    `does the array have a shuffle method:${array.shuffle !== undefined}`
);

Array.prototype.shuffle = function() {
    for (let id = 0; id < this.length; id++) {
        const randomId = Math.ceil(Math.random() * this.length - 1);
        const temp = this[randomId];
        this[randomId] = this[id];
        this[id] = temp;
    }
};

console.log(
    `does the array have a shuffle method:${array.shuffle !== undefined}`
);

array.shuffle();
console.log(array);