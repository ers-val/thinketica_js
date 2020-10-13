let array = [1, 2, 3, 4];

console.log(
    `does the array have a shuffle method:${array.shuffle !== undefined}`
);

Array.prototype.shuffle = function() {
    for (var id = 0; id < this.length; id++) {
        var randomId = Math.ceil(Math.random() * this.length - 1);
        var temp = this[randomId];
        this[randomId] = this[id];
        this[id] = temp;
    }
};

console.log(
    `does the array have a shuffle method:${array.shuffle !== undefined}`
);

array.shuffle();
console.log(array);