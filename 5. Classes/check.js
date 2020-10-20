class Figure {
    constructor(color) {
        this.color = color;
        this.canBeTransformed = false;
        this.position = {
            x: null,
            y: null,
        };
        this.sign = "-";
    }
    toString() {
        return this.sign;
    }
}

class Horse extends Figure {
    constructor(color, position) {
        super(color);
        this.sign = color == "white" ? "♘" : "♞";
        this.position = position;
    }
    availableSteps(field) {
        let { x, y } = this.position;
        let steps = [];
        if (x > 0 && y > 1) {
            if (
                field.getPoint(x - 1, y - 2) == null ||
                (field.getPoint(x - 1, y - 2).color != this.color &&
                    field.getPoint(x - 1, y - 2).constructor !=
                        this.constructor)
            ) {
                steps.push({
                    x: x - 1,
                    y: y - 2,
                });
            }
        }
        if (x > 1 && y > 0) {
            if (
                field.getPoint(x - 2, y - 1) == null ||
                (field.getPoint(x - 2, y - 1).color != this.color &&
                    field.getPoint(x - 2, y - 1).constructor !=
                        this.constructor)
            ) {
                steps.push({
                    x: x - 2,
                    y: y - 1,
                });
            }
        }
        if (x > 1 && y < 7) {
            if (
                field.getPoint(x - 2, y + 1) == null ||
                (field.getPoint(x - 2, y + 1).color != this.color &&
                    field.getPoint(x - 2, y + 1).constructor !=
                        this.constructor)
            ) {
                steps.push({
                    x: x - 2,
                    y: y + 1,
                });
            }
        }
        if (x > 0 && y < 6) {
            if (
                field.getPoint(x - 1, y + 2) == null ||
                (field.getPoint(x - 1, y + 2).color != this.color &&
                    field.getPoint(x - 1, y + 2).constructor !=
                        this.constructor)
            ) {
                steps.push({
                    x: x - 1,
                    y: y + 2,
                });
            }
        }
        if (x < 7 && y < 6) {
            if (
                field.getPoint(x + 1, y + 2) == null ||
                (field.getPoint(x + 1, y + 2).color != this.color &&
                    field.getPoint(x + 1, y + 2).constructor !=
                        this.constructor)
            ) {
                steps.push({
                    x: x + 1,
                    y: y + 2,
                });
            }
        }
        if (x < 6 && y < 7) {
            if (
                field.getPoint(x + 2, y + 1) == null ||
                (field.getPoint(x + 2, y + 1).color != this.color &&
                    field.getPoint(x + 2, y + 1).constructor !=
                        this.constructor)
            ) {
                steps.push({
                    x: x + 2,
                    y: y + 1,
                });
            }
        }
        if (x < 6 && y > 0) {
            if (
                field.getPoint(x + 2, y - 1) == null ||
                (field.getPoint(x + 2, y - 1).color != this.color &&
                    field.getPoint(x + 2, y - 1).constructor !=
                        this.constructor)
            ) {
                steps.push({
                    x: x + 2,
                    y: y - 1,
                });
            }
        }
        if (x < 7 && y > 1) {
            if (
                field.getPoint(x + 1, y - 2) == null ||
                (field.getPoint(x + 1, y - 2).color != this.color &&
                    field.getPoint(x + 1, y - 2).constructor !=
                        this.constructor)
            ) {
                steps.push({
                    x: x + 1,
                    y: y - 2,
                });
            }
        }
        return steps;
    }
}

class Pawn extends Figure {
    constructor(color, position) {
        super(color);
        this.sign = color == "white" ? "♙" : "♟";
        this.canBeTransformed = true;
        this.transformY = this.color == "white" ? 7 : 0;
    }
    availableSteps(field) {
        let steps = [];
        let { x, y } = this.position;
        if (this.color == "white") {
            if (y == 1) {
                steps.push({
                    x: x,
                    y: y + 1,
                });
                steps.push({
                    x: x,
                    y: y + 2,
                });
                return steps;
            }
            if (field.getPoint(x, y + 1) == null) {
                steps.push({
                    x: x,
                    y: y + 1,
                });
            }
            if (
                x > 0 &&
                y < 7 &&
                field.getPoint(x - 1, y + 1) != null &&
                field.getPoint(x - 1, y + 1).color != this.color
            ) {
                steps.push({
                    x: x - 1,
                    y: y + 1,
                });
            }
            if (
                x < 7 &&
                y < 7 &&
                field.getPoint(x + 1, y + 1) != null &&
                field.getPoint(x + 1, y + 1).color != this.color
            ) {
                steps.push({
                    x: x + 1,
                    y: y + 1,
                });
            }
        } else {
            if (y == 6) {
                steps.push({
                    x: x,
                    y: y - 1,
                });
                steps.push({
                    x: x,
                    y: y - 2,
                });
            }
            if (field.getPoint(x, y - 1) == null) {
                steps.push({
                    x: x,
                    y: y - 1,
                });
            }
            if (
                x > 0 &&
                y > 0 &&
                field.getPoint(x - 1, y - 1) != null &&
                field.getPoint(x - 1, y - 1).color != this.color
            ) {
                steps.push({
                    x: x - 1,
                    y: y - 1,
                });
            }
            if (
                x < 7 &&
                y > 0 &&
                field.getPoint(x + 1, y - 1) != null &&
                field.getPoint(x + 1, y - 1).color != this.color
            ) {
                steps.push({
                    x: x + 1,
                    y: y - 1,
                });
            }
        }

        return steps;
    }
}

class Rook extends Figure {
    constructor(color, position) {
        super(color);
        this.sign = color == "white" ? "♖" : "♜";
        this.position = position;
    }

    availableSteps(field) {
        let { x, y } = this.position;
        let steps = [];
        for (let i = x - 1; i >= 0; i--) {
            if (field.getPoint(i, y) == null) {
                steps.push({
                    x: i,
                    y: y,
                });
            } else if (field.getPoint(i, y).color != this.color) {
                steps.push({
                    x: i,
                    y: y,
                });
                break;
            } else {
                break;
            }
        }
        for (let i = x + 1; i <= 7; i++) {
            if (field.getPoint(i, y) == null) {
                steps.push({
                    x: i,
                    y: y,
                });
            } else if (field.getPoint(i, y).color != this.color) {
                steps.push({
                    x: i,
                    y: y,
                });
                break;
            } else {
                break;
            }
        }
        for (let i = y - 1; i >= 0; i--) {
            if (field.getPoint(x, i) == null) {
                steps.push({
                    x: x,
                    y: i,
                });
            } else if (field.getPoint(x, i).color != this.color) {
                steps.push({
                    x: x,
                    y: i,
                });
                break;
            } else {
                break;
            }
        }
        for (let i = y + 1; i <= 7; i++) {
            if (field.getPoint(x, i) == null) {
                steps.push({
                    x: x,
                    y: i,
                });
            } else if (field.getPoint(x, i).color != this.color) {
                steps.push({
                    x: x,
                    y: i,
                });
                break;
            } else {
                break;
            }
        }
        return steps;
    }
}

class Bishop extends Figure {
    constructor(color, position) {
        super(color);
        this.sign = color == "white" ? "♗" : "♝";
        this.position = position;
    }
    availableSteps(field) {
        let { x, y } = this.position;
        let steps = [];
        for (let i = x - 1; i >= 0; i--) {
            if (field.getPoint(i, i) == null) {
                steps.push({
                    x: i,
                    y: i,
                });
            } else if (field.getPoint(i, i).color != this.color) {
                steps.push({
                    x: i,
                    y: i,
                });
                break;
            } else {
                break;
            }
        }
        for (let i = x - 1; i >= 0; i--) {
            const num = x - i;
            if (y + num <= 7) {
                if (
                    field.getPoint(i, y + num) == null ||
                    field.getPoint(i, y + num).color != this.color
                ) {
                    steps.push({
                        x: i,
                        y: y + num,
                    });
                }
            } else {
                break;
            }
        }
        for (let i = x + 1; i <= 7; i++) {
            if (field.getPoint(i, i) == null) {
                steps.push({
                    x: i,
                    y: i,
                });
            } else if (field.getPoint(i, i).color != this.color) {
                steps.push({
                    x: i,
                    y: i,
                });
                break;
            } else {
                break;
            }
        }
        for (let i = y - 1; i >= 0; i--) {
            const num = y - i;
            if (x + num <= 7) {
                if (
                    field.getPoint(x + num, i) == null ||
                    field.getPoint(x + num, i).color != this.color
                ) {
                    steps.push({
                        x: x + num,
                        y: i,
                    });
                }
            } else {
                break;
            }
        }
        return steps;
    }
}

class Queen extends Figure {
    constructor(color, position) {
        super(color);
        this.sign = color == "white" ? "♕" : "♛";
        this.position = position;
    }
    availableSteps(field) {
        let { x, y } = this.position;
        let steps = [];
        for (let i = x - 1; i >= 0; i--) {
            if (field.getPoint(i, i) == null) {
                steps.push({
                    x: i,
                    y: i,
                });
            } else if (field.getPoint(i, i).color != this.color) {
                steps.push({
                    x: i,
                    y: i,
                });
                break;
            } else {
                break;
            }
        }
        for (let i = x - 1; i >= 0; i--) {
            const num = x - i;
            if (y + num <= 7) {
                if (field.getPoint(i, y + num) == null) {
                    steps.push({
                        x: i,
                        y: y + num,
                    });
                } else if (field.getPoint(i, y + num).color != this.color) {
                    steps.push({
                        x: i,
                        y: y + num,
                    });
                    break;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        for (let i = x + 1; i <= 7; i++) {
            if (field.getPoint(i, i) == null) {
                steps.push({
                    x: i,
                    y: i,
                });
            } else if (field.getPoint(i, i).color != this.color) {
                steps.push({
                    x: i,
                    y: i,
                });
                break;
            } else {
                break;
            }
        }
        for (let i = y - 1; i >= 0; i--) {
            const num = y - i;
            if (x + num <= 7) {
                if (field.getPoint(x + num, i) == null) {
                    steps.push({
                        x: x + num,
                        y: i,
                    });
                } else if (field.getPoint(x + num, i).color != this.color) {
                    steps.push({
                        x: x + num,
                        y: i,
                    });
                    break;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        for (let i = x - 1; i >= 0; i--) {
            if (field.getPoint(i, y) == null) {
                steps.push({
                    x: i,
                    y: y,
                });
            } else if (field.getPoint(i, y).color != this.color) {
                steps.push({
                    x: i,
                    y: y,
                });
                break;
            } else {
                break;
            }
        }
        for (let i = x + 1; i <= 7; i++) {
            if (field.getPoint(i, y) == null) {
                steps.push({
                    x: i,
                    y: y,
                });
            } else if (field.getPoint(i, y).color != this.color) {
                steps.push({
                    x: i,
                    y: y,
                });
                break;
            } else {
                break;
            }
        }
        for (let i = y - 1; i >= 0; i--) {
            if (field.getPoint(x, i) == null) {
                steps.push({
                    x: x,
                    y: i,
                });
            } else if (field.getPoint(x, i).color != this.color) {
                steps.push({
                    x: x,
                    y: i,
                });
                break;
            } else {
                break;
            }
        }
        for (let i = y + 1; i <= 7; i++) {
            if (field.getPoint(x, i) == null) {
                steps.push({
                    x: x,
                    y: i,
                });
            } else if (field.getPoint(x, i).color != this.color) {
                steps.push({
                    x: x,
                    y: i,
                });
                break;
            } else {
                break;
            }
        }
        return steps;
    }
}

class King extends Figure {
    constructor(color, position) {
        super(color);
        this.sign = color == "white" ? "♔" : "♚";
        this.position = position;
    }
    availableSteps(field) {
        let { x, y } = this.position;
        let steps = [];
        if (x - 1 >= 0) {
            if (
                field.getPoint(x - 1, y) == null ||
                field.getPoint(x - 1, y).color != this.color
            ) {
                steps.push({
                    x: x - 1,
                    y: y,
                });
            }
        }
        if (x - 1 >= 0 && y + 1 <= 7) {
            if (
                field.getPoint(x - 1, y + 1) == null ||
                field.getPoint(x - 1, y + 1).color != this.color
            ) {
                steps.push({
                    x: x - 1,
                    y: y + 1,
                });
            }
        }
        if (y + 1 <= 7) {
            if (
                field.getPoint(x, y + 1) == null ||
                field.getPoint(x, y + 1).color != this.color
            ) {
                steps.push({
                    x: x,
                    y: y + 1,
                });
            }
        }
        if (x + 1 <= 7 && y - 1 >= 0) {
            if (
                field.getPoint(x + 1, y - 1) == null ||
                field.getPoint(x + 1, y - 1).color != this.color
            ) {
                steps.push({
                    x: x + 1,
                    y: y - 1,
                });
            }
        }
        if (y - 1 >= 0) {
            if (
                field.getPoint(x, y - 1) == null ||
                field.getPoint(x, y - 1).color != this.color
            ) {
                steps.push({
                    x: x,
                    y: y - 1,
                });
            }
        }
        if (x - 1 >= 0 && y - 1 >= 0) {
            if (
                field.getPoint(x - 1, y - 1) == null ||
                field.getPoint(x - 1, y - 1).color != this.color
            ) {
                steps.push({
                    x: x - 1,
                    y: y - 1,
                });
            }
        }
        return steps;
    }
}

/* */
class Game {
    constructor() {
        this.field = new Field();
        this.round = "white";
        this.userColor = ["black", "white"][Math.round(Math.random())];
        this.pcColor = this.userColor == "white" ? "black" : "white";
        this.userFigures = getFigures(this.userColor);
        this.pcFigures = getFigures(this.pcColor);
        this.field.putFiguresOn(this.userFigures, this.userColor);
        this.field.putFiguresOn(this.pcFigures, this.pcColor);
        this.status = "Game Goes On";
        this.stepsHistory = [];
        this.stepsCount = 0;
        this.lostFigures = [];
    }

    runGame() {
        alert(`Your color is ${this.userColor}`);
        debugger;
        while (true) {
            this.field.render();
            if (this.round == this.userColor) {
                while (true) {
                    let figure = this.chooseFigure(this.userFigures);
                    let steps = figure.availableSteps();
                    let step = this.chooseSteps(steps);
                    if (step === null) {
                        continue;
                    }
                    let { x, y } = figure.position;
                    if (this.field.getPoint(step.x, step.y) == null) {
                        this.field.assignFigureToPosition(
                            step.x,
                            step.y,
                            figure
                        );
                        this.field.assignFigureToPosition(x, y, null);
                        this.stepsHistory.push(step);
                        this.stepsCount++;
                    } else {
                        let enemy = this.field.getPoint(step.x, step.y);
                        this.field.assignFigureToPosition(
                            step.x,
                            step.y,
                            figure
                        );
                        this.field.assignFigureToPosition(x, y, null);
                        this.lostFigures.push(enemy);
                        this.pcFigures = this.pcFigures.filter(
                            (x) => x === enemy
                        );
                        this.stepsHistory.push(step);
                        this.stepsCount++;
                    }
                    if (
                        figure.canBeTransformed &&
                        figure.transformY == step.y
                    ) {
                        const variants = [
                            new Queen(figure.color),
                            new Rook(figure.color),
                            new Bishop(figure.color),
                            new Horse(figure.color),
                        ];
                        const question = `type index of figure you want to transform to ${variants}: `;
                        const answered_id = this.ask(question);
                        if (answer) {
                            const id = this.userFigures.indexOf(figure);
                            this.userFigures[id] = variants[answered_id];
                            this.field.assignFigureToPosition(
                                step.x,
                                step.y,
                                this.userFigures[id]
                            );
                        }
                    }
                    break;
                }
                this.status = this.checkConditions();
                this.round = this.round == "white" ? "black" : "white";
            } else {
                while (true) {
                    let figure = this.pcFigures[
                        Math.floor(Math.random() * this.pcFigures.length)
                    ];
                    let { x, y } = figure.position;
                    let steps = figure.availableSteps(this.field);
                    if (!steps) {
                        continue;
                    }
                    let id = Math.floor(Math.random() * steps.length);
                    let step = steps[id];
                    if (step === null) {
                        continue;
                    }
                    if (this.field.getPoint(step.x, step.y) == null) {
                        this.field.assignFigureToPosition(x, y, null);
                        this.field.assignFigureToPosition(
                            step.x,
                            step.y,
                            figure
                        );
                        this.stepsHistory.push(step);
                        this.stepsCount++;
                    } else {
                        this.field.assignFigureToPosition(x, y, null);
                        let enemy = this.field.getPoint(step.x, step.y);
                        this.lostFigures.push(enemy);
                        this.pcFigures = this.pcFigures.filter(
                            (x) => x === enemy
                        );
                        this.field.assignFigureToPosition(
                            step.x,
                            step.y,
                            figure
                        );
                        this.stepsHistory.push(step);
                        this.stepsCount++;
                    }
                    if (
                        figure.canBeTransformed &&
                        figure.transformY == step.y
                    ) {
                        const variants = [
                            new Queen(figure.color),
                            new Rook(figure.color),
                            new Bishop(figure.color),
                            new Horse(figure.color),
                        ];
                        const id = this.userFigures.indexOf(figure);
                        this.userFigures[id] =
                            variants[
                                Math.floor(Math.random() * variants.length)
                            ];
                        this.field.assignFigureToPosition(
                            step.x,
                            step.y,
                            this.userFigures[id]
                        );
                    }
                    break;
                }
                this.status = this.checkConditions();
                this.round = this.round == "white" ? "black" : "white";
            }
            if (this.status == "white") {
                this.print("white win");
                break;
            } else if (this.status == "black") {
                this.print("black win");
                break;
            }
        }
    }

    chooseFigure(figures) {
        const question = `type index of figure ${figures}: `;
        const id = ask(question);
        return figures[id];
    }
    chooseSteps(steps) {
        console.log(`steps ${steps}`);
        const coords = steps.map((step) => `[x-${step.x},y-${step.y}]`);
        console.log(`coords ${coords}`);
        const question = `type step index ${coords} or N to choose figure: `;
        const id = ask(question);
        if (id !== null) {
            return steps[id];
        }
        return null;
    }
    checkConditions() {
        if (this.userFigures.length == 0) {
            return this.userColor == "white" ? "black" : "white";
        } else if (this.pcFigures.length == 0) {
            return this.pcColor == "white" ? "black" : "white";
        } else {
            return "game goes on";
        }
    }
    print(text) {
        if (isBrowser()) {
            document.write(text);
        } else {
            console.log(text);
        }
    }
}

class Field {
    constructor() {
        this.field = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
        ];
    }

    getPoint(x, y) {
        return this.field[7 - y][x];
    }

    setPoint(x, y, figure) {
        this.field[x][y] = figure;
    }

    assignFigureToPosition(x, y, figure) {
        this.field[7 - y][x] = figure;
        if (figure) {
            figure.position = {
                x,
                y,
            };
        }
    }
    putFiguresOn(figures, color) {
        if (color == "white") {
            this.assignFigureToPosition(0, 0, figures[0]);
            this.assignFigureToPosition(1, 0, figures[1]);
            this.assignFigureToPosition(2, 0, figures[2]);
            this.assignFigureToPosition(3, 0, figures[3]);
            this.assignFigureToPosition(4, 0, figures[4]);
            this.assignFigureToPosition(5, 0, figures[5]);
            this.assignFigureToPosition(6, 0, figures[6]);
            this.assignFigureToPosition(7, 0, figures[7]);
            for (let i = 0; i < 8; i++) {
                this.assignFigureToPosition(i, 1, figures[8 + i]);
            }
        } else {
            this.assignFigureToPosition(0, 7, figures[0]);
            this.assignFigureToPosition(1, 7, figures[1]);
            this.assignFigureToPosition(2, 7, figures[2]);
            this.assignFigureToPosition(3, 7, figures[3]);
            this.assignFigureToPosition(4, 7, figures[4]);
            this.assignFigureToPosition(5, 7, figures[5]);
            this.assignFigureToPosition(6, 7, figures[6]);
            this.assignFigureToPosition(7, 7, figures[7]);
            for (let i = 0; i < 8; i++) {
                this.assignFigureToPosition(i, 6, figures[8 + i]);
            }
        }
    }

    render() {
        const n = isBrowser() ? "<br>" : "\n";
        let s = ``;
        for (let row of this.field) {
            s += "║";
            for (let char of row) {
                if (char != null) {
                    s += char.sign;
                } else {
                    s += "....";
                }
            }
            s += `║${n}`;
        }

        if (isBrowser()) {
            document.body.innerHTML = s;
            //document.write(s);
        } else {
            console.log(s);
        }
    }
}

function getFigures(color) {
    return [
        new Rook(color),
        new Horse(color),
        new Bishop(color),
        new Queen(color),
        new King(color),
        new Bishop(color),
        new Horse(color),
        new Rook(color),
        new Pawn(color),
        new Pawn(color),
        new Pawn(color),
        new Pawn(color),
        new Pawn(color),
        new Pawn(color),
        new Pawn(color),
        new Pawn(color),
    ];
}

function ask(text) {
    if (isBrowser) {
        return browserAsk(text);
    } else {
        return nodeAsk(text);
    }
}

function nodeAsk(text) {
    readline.question(text, (answer) => {
        try {
            if (answer.toLowerCase() == "n") {
                return null;
            }
            readline.close();
            return parseInt(answer);
        } catch (error) {
            console.log(e);
            readline.close();
            return null;
        }
    });
}

function browserAsk(text) {
    try {
        const answer = prompt(text);
        if (answer.toLowerCase() == "n") {
            return null;
        }
        return parseInt(answer);
    } catch (e) {
        console.log(e);
        return null;
    }
}

function isBrowser() {
    try {
        return this == window;
    } catch (e) {
        return false;
    }
}

/* */
const myGame = new Game();
myGame.runGame();
