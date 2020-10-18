// Ships
function BaseShip(color) {
    this.color = color;
    this.isBreaked = false;
}

function MotorShip(color, enginePower, bodyMaterial) {
    BaseShip.call(this, color);
    this.type = "Motor";
    this.enginePower = enginePower;
    this.bodyMaterial = bodyMaterial;
}

function SailShip(color, mastsNumber, sailsArea) {
    BaseShip.call(this, color);
    this.type = "Sails";
    this.color = color;
    this.mastsNumber = mastsNumber;
    this.sailsArea = sailsArea;
}

// Yards
function BaseShipYard() {
    this.repairShip = function(ship) {
        if (ship.isBreaked) {
            ship.isBreaked = false;
            console.log("Ship was Repaired");
        } else {
            console.log("Your Ship Is Perfect");
        }
    };
    this.repaintShip = function(ship, color) {
        ship.color = color;
    };
    this.exchangeShip = function(ship1, ship2) {
        if (ship1.type == ship2.type) {
            return [ship2, ship1];
        } else {
            console.log("Ship types are different");
            return [ship1, ship2];
        }
    };
}

function MotorShipYard() {
    BaseShipYard.call(this);
    this.type = "Motor";
    this.makeShip = function(color, enginePower, bodyMaterial) {
        return new MotorShip(color, enginePower, bodyMaterial);
    };
}

function SailShipYard() {
    BaseShipYard.call(this);
    this.type = "Sails";
    this.makeShip = function(color, mastsNumber, sailsArea) {
        return new SailShip(color, mastsNumber, sailsArea);
    };
}



/**/
const motorYard = new MotorShipYard();
const sailYard = new SailShipYard();

let ship1 = motorYard.makeShip("blue", 100, "wood");
let ship2 = motorYard.makeShip("green", 120, "metal");
let ship3 = sailYard.makeShip("red", 4, 200);
let ship4 = sailYard.makeShip("yellow", 2, 150);

console.log(ship1);
console.log(ship2);
console.log(ship3);
console.log(ship4);

console.log("\n");
motorYard.repairShip(ship1);
ship1.isBreaked = true;
motorYard.repairShip(ship1);

console.log("\n");
console.log(ship1.color);
motorYard.repaintShip(ship1, "Black");
console.log(ship1.color);

console.log("\n");
console.log(ship1);
[ship1, ship2] = motorYard.exchangeShip(ship1, ship2);
console.log(ship1);

[ship1, ship3] = motorYard.exchangeShip(ship1, ship3);
