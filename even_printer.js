function printEvenNumsFor(num=20){
    for (var i=1; i<=num; i++){
        if (i%2===0){
            console.log(i);
        } 
    }
}


function printEvenNumsWhile(num=20){
    var i = 1;
    while (i<=num){
        if (i%2===0){
            console.log(i);
        }
        i++; 
    }
}

function printEvenNumsDo(num=20){
    var i = 1;
    do {
        if (i%2===0){
            console.log(i);
        }
        i++; 
    } while (i<=num);
}

/**/
printEvenNumsFor();
printEvenNumsWhile();
printEvenNumsDo();