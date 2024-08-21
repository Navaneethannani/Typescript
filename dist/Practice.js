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
let PersonDetails = ["Nani", 22];
let isMajor;
let age = PersonDetails[1];
function findMajor(x) {
    if (x >= 18) {
        return isMajor = true;
    }
    else {
        return isMajor = false;
    }
}
console.log(PersonDetails, "details");
console.log(findMajor(age));
