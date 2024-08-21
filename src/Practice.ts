interface AddressDetails{
    DoorNo : number,
    street : string,
    city : string,
    state : string,
    Country : string,
    pincode : number
}

let Address : AddressDetails ={
    DoorNo : 23,
    street : "North Street",
    city : "Chennai",
    state : "TamilNadu",
    Country : "India",
    pincode : 600001
}

interface IdentityDetails {
    weight :number,
    height : number
}

let Identity : IdentityDetails ={
    weight : 65,
    height : 6.1
}

interface PersonDetails {
    name : string,
    age : number,
    isMajor : Boolean,
    Address: AddressDetails,
    Identity : IdentityDetails,
};

let User : PersonDetails = {
    name :"Nani",
    age : 22,
    isMajor : true,
    Address : Address,
    Identity : Identity
}
console.log(User,"User")


// different method
let PersonDetails: [name : string, age : number ] = ["Nani", 22]

let isMajor : boolean
let age = PersonDetails[1]

function findMajor(x : number): boolean{
    if (x >= 18){
        return isMajor = true
    }else{
        return isMajor = false
    }
}

console.log(PersonDetails,"details")
console.log(findMajor(age))

