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
