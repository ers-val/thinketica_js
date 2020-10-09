function are_equal(array1, array2) {
    if (array1.length != array2.length) return false;

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

/** */
var a = [1, 3, 5];
var b = [1, 3, 5];
var c = [1, 3, 5, 5];

console.log(are_equal(a, b));
console.log(are_equal(a, c));