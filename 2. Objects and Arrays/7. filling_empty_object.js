var newObject = {};
console.log(newObject);
newObject.name = "Alex";
console.log(newObject);
newObject.lastName = "Smith";
console.log(newObject);
newObject.name = "Bob";
console.log(newObject);
delete newObject.name;
delete newObject.lastName;
console.log(newObject);