function getWordsArray(text) {
    var newText = text.replace(/[,.\/\\:;'"(){}[\]\!@#=-?]/g, " ");
    var wordsArray = newText.split(" ");
    wordsArray = wordsArray.filter((word) => word != false);
    wordsArray = wordsArray.map((word) => {
        return {
            word: word,
            length: word.length,
            isCapitalized: isCapitalized(word),
        };
    });
    return wordsArray;
}

function isCapitalized(word) {
    return Boolean(word.match(/^[A-ZА-Я][a-zа-я]+$/g));
}

/**/

var text = `Когда окончится кризис и начнется ли экономический рост? Почему современный экономический кризис может стать переломным в истории человечества? Поговорим об этом в настоящем ролике.`;
console.log(getWordsArray(text));