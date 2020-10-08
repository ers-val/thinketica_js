function are_equal(arr1, arr2) {
    if (arr1.length != arr2.length) return false;

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

/** */
var a = [1,3,5];
var b = [1,3,5];
var c = [1,3,5,5];

console.log(are_equal(a,b));
console.log(are_equal(a,c));