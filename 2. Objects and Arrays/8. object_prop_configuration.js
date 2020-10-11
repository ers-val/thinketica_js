var human = Object.create({}, {
    fullName: {
        set: function (text) {
            [this.firstName, this.lastName] = text.split(" ");
        },
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    },
    dateOfBirth: {
        set: function (value) {
            this.birthDate = new Date(value);
            this.age = new Date().getFullYear() - this.birthDate.getFullYear();
        },
        get: function () {
            return this.birthDate;
        },
    },
});

/* */
human.fullName = "qwe asd";
console.log(human);
console.log(human.fullName);
human.dateOfBirth = "1.1.1990";
console.log(human);
console.log(human.dateOfBirth);