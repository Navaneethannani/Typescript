"use strict";
let Address = {
    DoorNo: 23,
    street: "North Street",
    city: "Chennai",
    state: "TamilNadu",
    Country: "India",
    pincode: 600001
};
let Identity = {
    weight: 65,
    height: 6.1
};
;
let User = {
    name: "Nani",
    age: 22,
    isMajor: true,
    Address: Address,
    Identity: Identity
};
console.log(User, "User");
// different method 
// array push
let PersonDetails = ["Nani", 12];
function findMajor(x) {
    let isMajor;
    if (x >= 18) {
        isMajor = true;
        PersonDetails.push(isMajor);
    }
    else {
        isMajor = false;
        PersonDetails.push(isMajor);
    }
    return isMajor;
}
let age = PersonDetails[1];
if (typeof age === "number") {
    let isMajor = findMajor(age);
    console.log(isMajor);
}
console.log(PersonDetails, "details");
//Generics
function addDetails(name, age) {
    return [name, age];
}
let Nani = [];
Nani.push(addDetails("nani", 22));
let Messi = [];
Messi.push(addDetails("Messi", 34));
console.log(Nani, Messi, "Players");
