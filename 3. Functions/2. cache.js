function cache(){
    let memory = {};
    return (number, power)=>{
        if (memory[number]){
            return {
                value: memory[number], fromCache: true
            };
        } else {
            var result = Math.pow(number, power);
            memory[number] = result;
            return {value: result, fromCache: false};
        }
  };
}


const calculate = cache();

console.log(calculate(3, 3)); // { value: 27, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}