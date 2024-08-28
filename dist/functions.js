"use strict";
// function 
function addPerson(name, age) {
    let allPersons = JSON.parse(localStorage.getItem("allPersons") || "[]");
    let personExists = allPersons.some(person => person.name === name);
    if (!personExists) {
        allPersons.push({ name, age });
    }
    localStorage.setItem("allPersons", JSON.stringify(allPersons));
}
addPerson("nani", 22);
addPerson("navi", 17);
let eligible = [];
let notEligible = [];
function checkEligibility() {
    let allPersons = JSON.parse(localStorage.getItem("allPersons") || "[]");
    allPersons.forEach((person) => {
        if (person.age > 18) {
            eligible.push(person);
        }
        else {
            notEligible.push(person);
        }
    });
    console.log("Eligible:", eligible);
    console.log("Not Eligible:", notEligible);
}
checkEligibility();
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(2, 3, 5));
const names = ["nani", "abc", "def"];
const numbers = [1, 2, 4];
//rest parameters
function getTotal(...numbers) {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal(1, 2, 3, 4));
function summarize(...args) {
    let total = 0;
    let combinedString = '';
    let trueCount = 0;
    args.forEach((arg) => {
        if (typeof arg === 'number') {
            total += arg;
        }
        else if (typeof arg === 'string') {
            combinedString += arg;
        }
        else if (typeof arg === 'boolean' && arg === true) {
            trueCount += 1;
        }
    });
    return [total, combinedString, trueCount];
}
const [adds, concatenatedString, trueBooleans] = summarize(5, 'Hello', true, 10, false, 'World', true, 15);
console.log({ adds });
console.log({ concatenatedString });
console.log({ trueBooleans });
function addition(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}
console.log(addition(10, 20));
console.log(addition('Hello, ', 'world!'));
