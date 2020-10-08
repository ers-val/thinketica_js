function randomSort(arr) {
    var newArr = [...arr];
    for (var id = 0; id < arr.length; id++) {
        var rand_id = Math.ceil(Math.random() * arr.length - 1);
        var temp = newArr[rand_id];
        newArr[rand_id] = newArr[id];
        newArr[id] = temp;
    }
    return newArr;
}

/**/
console.log(randomSort([1, 2, 3, 4, 5]));
