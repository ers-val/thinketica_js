function filterByLength(wordsArray, ...length) {
    var newArr = [];
    for (var num of length) {
        var filtered = wordsArray.filter((word) => word.length === num);
        newArr = newArr.concat(filtered);
    }
    return newArr;
}

/* */
var words = ["" ,"","1","q","qw","as","zxc","qwe","qwer","asdf","zxcas","qwesd"];
var sorted = filterByLength(words, 1, 5, 2);
console.log(sorted);