function sortDesc(numbers){
	numbers.sort((a,b)=>b-a);	
}

function getSortedArr(arr){
    var newArr = [...arr];
    sortDesc(newArr);
    return newArr;
}

/** */
var a  = [1,2,4,6,7,9];
console.log(getSortedArr(a));
