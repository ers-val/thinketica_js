function sortDesc(numbers){
	numbers.sort((a,b)=>b-a);	
}

function getSortedArray(array){
    var newArray = [...array];
    sortDesc(newArray);
    return newArray;
}

/** */
var a  = [1,2,4,6,7,9];
console.log(getSortedArray(a));
