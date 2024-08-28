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
