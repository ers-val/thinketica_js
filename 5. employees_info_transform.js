function getAverageSalary(employees) {
    if (employees.length > 0) {
        var salarySum = employees.reduce(
            (accumulator, employee) => accumulator + employee.salary,
            0
        );
        return (salarySum / employees.length).toFixed(2);
    }
    return 0;
}

function getSortedEmployeesBySalary(employees, asc = true) {
    var newEmployeesArray = [...employees];
    if (asc) {
        newEmployeesArray.sort((a, b) => a.salary - b.salary);
    } else {
        newEmployeesArray.sort((a, b) => b.salary - a.salary);
    }
    return newEmployeesArray;
}

function filterEmployeesByAgeAndSalary(employees, age, salary) {
    return employees
        .filter((employee) => employee.age > age)
        .filter((employee) => employee.salary > salary);
}

/**/
const employees = [{
        firstName: "Alex",
        lastName: "Smith",
        age: 54,
        salary: 10000,
        position: "Architect",
    },
    {
        firstName: "Gustav",
        lastName: "Andersen",
        age: 31,
        salary: 5000,
        position: "Software engineer",
    },
    {
        firstName: "Liz",
        lastName: "Taylor",
        age: 20,
        salary: 7000,
        position: "Manager",
    },
];

console.log(getAverageSalary(employees));
console.log(getSortedEmployeesBySalary(employees, false));
console.log(filterEmployeesByAgeAndSalary(employees, 25, 4500));