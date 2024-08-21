"use strict";
let num1 = 50; // inline annotations
let num2 = 10; // inline annotations
function multiple(num1, num2) {
    return num1 * num2;
}
console.log(multiple(num1, num2), "multiple");
let str = "nani";
console.log(str, "name");
let arr = ["nani", "games"];
console.log(arr, "array");
let tuple = ["nani", 2];
console.log(tuple, "combine");
let person = {
    name: "nani",
    age: 22
};
console.log(person, "person");
let pictures = {
    width: 23,
    height: 23
};
console.log(pictures, "pixels");
//  Inline Type Annotations
// -- function parameters inline type annotation
function greet(person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}
greet({ name: "Nani", age: 22, isMajor: true });
//Union Types
let result;
result = 42;
result = "Hello";
result = true;
console.log(result, "Union");
// Enum type
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["East"] = 1] = "East";
    Directions[Directions["South"] = 2] = "South";
    Directions[Directions["West"] = 3] = "West";
})(Directions || (Directions = {}));
;
let currentDirection = Directions.West;
console.log(currentDirection);
//   Generics
function identity(arg) {
    return arg;
}
let animal = identity("Lion");
let year = identity(2024);
let add = (x, y) => x + y;
// class type
class Dog {
    constructor(breed) {
        this.breed = breed;
    }
}
let myDog = new Dog("German Shepherd");
console.log(myDog);
