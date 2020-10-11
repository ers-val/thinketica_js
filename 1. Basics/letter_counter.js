function getLettersNum(word){
    if (typeof word == "string"){
        return word.length;
    } else{
        return 0;
    }
};

/**/
console.log(
    getLettersNum("Test")
);

console.log(
    getLettersNum(123)
);