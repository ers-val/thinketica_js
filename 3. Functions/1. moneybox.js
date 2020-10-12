function MoneyBox() {
    let balance = 0;
    return {
        addCoin: () => {
            balance += 1;
        },
        getAmount: () => balance,
    };
}

const box = new MoneyBox();

console.log(box.getAmount()); // 0
box.addCoin();
box.addCoin();
console.log(box.getAmount()); // 2
