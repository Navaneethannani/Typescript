"use strict";
class Admin {
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let admin = new Admin(171280926, 'John', 'Doe');
console.log(admin, "admin");
//access modifier
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    getInfo() {
        return `${this.name} is a ${this.species}.`;
    }
    getAge() {
        return this.age;
    }
    getSpecies() {
        return this.species;
    }
}
const species = new Animal('dog', 22, 'german');
console.log(species.name);
// console.log(species.age) //private only show inside the class so it will through error
// console.log(species.species) // protected only used inside the class or inheritance class
//Inheritance
class Human {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    getFullName() {
        return `${this.fName} ${this.lName}`;
    }
    describe() {
        return `This is ${this.getFullName()}.`;
    }
}
class Employee extends Human {
    constructor(fName, lName, jobTitle) {
        super(fName, lName);
        this.jobTitle = jobTitle;
        Employee.headCount++;
    }
    describe() {
        return super.describe() + `I am a ${this.jobTitle}`;
    }
    static getHeadCount() {
        return Employee.headCount;
    }
}
Employee.headCount = 0;
let employee = new Employee("nani", "saga", "FullStack Developer");
let Navi = new Employee("Navi", "abc", "Back-end Developer");
console.log(employee.getFullName());
console.log(employee.describe());
console.log(Employee.getHeadCount());
