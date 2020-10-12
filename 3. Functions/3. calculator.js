function Calc() {
    this.state = {
        history: [],
        operations: [
            {
                sign: "+",
                func: (a, b) => a + b,
            },
            {
                sign: "-",
                func: (a, b) => a - b,
            },
        ],
    };

    this.operation = (text) => {
        for (var operation of this.state.operations) {
            if (text.includes(operation.sign)) {
                var [a, b] = text
                    .split(operation.sign)
                    .map((chars) => chars.trim());
                this.state.history.push({
                    operation: operation.sign,
                    operands: [a, b],
                });
                return operation.func(parseInt(a), parseInt(b));
            }
        }
        return "operation not found";
    };

    this.addOperation = (sign, func) => {
        this.state.operations.push({
            sign,
            func,
        });
    };

    this.history = () => {
        return this.state.history;
    };

    this.clearHistory = () => {
        this.state.history = [];
    };    
}

const calculator = new Calc();
console.log(calculator.operation("31 + 32")); // 63
console.log(calculator.operation("10 * 2")); // operation not found
console.log(calculator.operation("10 - 2")); // 8
calculator.addOperation("/", (a, b) => a / b);
console.log(calculator.operation("10 / 2")); // 5
console.log(calculator.history());
/* [{operation: '+', operands: [31,32]}, {operation: '/', operands: [10,2]}] */
calculator.clearHistory();
console.log(calculator.history()); // []
