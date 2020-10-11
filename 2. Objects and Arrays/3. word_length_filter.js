function filterByLength(wordsArray, ...lengthArguments) {
    var newWordsArray = [];
    for (var length of lengthArguments) {
        var filteredWords = wordsArray.filter((word) => word.length === length);
        newWordsArray = newWordsArray.concat(filteredWords);
    }
    return newWordsArray;
}

/* */
var words = [
    "",
    "",
    "1",
    "q",
    "qw",
    "as",
    "zxc",
    "qwe",
    "qwer",
    "asdf",
    "zxcas",
    "qwesd",
];
var filteredWords = filterByLength(words, 1, 5, 2);
console.log(filteredWords);
var filteredWords = filterByLength(words);
console.log(filteredWords);
var filteredWords = filterByLength(words, 0);
console.log(filteredWords);
