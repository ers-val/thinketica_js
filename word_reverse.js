function getReversedWord(word){
    if (typeof word !== "string"){
        word = String(word);
    }
    var newWord = "";
    for (var i=word.length-1; i>=0; i--){ 
        newWord+=word[i];
    }
    return newWord;
} 


/**/
console.log(
    getReversedWord("Test")
);

console.log(
    getReversedWord(123)
);