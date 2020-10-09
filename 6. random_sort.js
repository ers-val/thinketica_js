function randomSort(array) {
    var newArray = [...array];
    for (var id = 0; id < array.length; id++) {
        var randomId = Math.ceil(Math.random() * array.length - 1);
        var temp = newArray[randomId];
        newArray[randomId] = newArray[id];
        newArray[id] = temp;
    }
    return newArray;
}

/**/
console.log(randomSort([1, 2, 3, 4, 5]));
