function Human(fullname) {
    const [name, lastname] = fullname.split(" ");
    this.name = name;
    this.lastName = lastname;
    this.eat = function() {
        console.log("Im eating!")
    };
    this.sleep = function() {
        console.log("Im sleeping!")
    };
    this.callFriend = function() {
        console.log("Im calling to my friend!")
    };
};

function Employee(info) {
    Human.call(this, info.fullname);
    Object.setPrototypeOf(this, Human);
    this.position = info.position;
    this.startDate = info.startdate;
    this.endDate = null;
    this.department = info.department;
    this.phoneNumber = info.phoneNumber;
    this.baseSalary = info.baseSalary;
    this.salaryCurrency = info.salaryCurrency;
    this.location = info.location;
};


function CurrentEmployee(info) {
    Employee.call(this, info);
    Object.setPrototypeOf(this, Employee);
    this.writeReport = function() {};
    this.organizeMeeting = function() {};
    this.retire = function() {};
    this.startVacation = function() {};
};

function FormerEmployee(info) {
    Employee.call(this, info);
    Object.setPrototypeOf(this, Employee);
    this.endDate = new Date();
};
