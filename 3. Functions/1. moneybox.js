function MoneyBox(){
  let sum = 0;
  return {
    addCoin:()=>{sum+=1},
    getAmount:()=>sum
  }
}


const box = new MoneyBox();

console.log(box.getAmount()); // 0
box.addCoin();
box.addCoin();
console.log(box.getAmount()); // 2