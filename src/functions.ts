// function 

type Person1 = {
    name: string;
    age: number;
};

function addPerson(name: string, age: number): void {

    let allPersons: Person1[] = JSON.parse(localStorage.getItem("allPersons") || "[]");

    let personExists = allPersons.some(person => person.name === name);


    if (!personExists) {
        allPersons.push({ name, age });
    }

    localStorage.setItem("allPersons", JSON.stringify(allPersons));
}


addPerson("nani", 22);
addPerson("navi", 17);


let eligible: Person1[] = [];
let notEligible: Person1[] = [];

function checkEligibility() {

    let allPersons: Person1[] = JSON.parse(localStorage.getItem("allPersons") || "[]");


    allPersons.forEach((person: Person1) => {
        if (person.age > 18) {
            eligible.push(person);
        } else {
            notEligible.push(person);
        }
    });

    console.log("Eligible:", eligible);
    console.log("Not Eligible:", notEligible);
}
checkEligibility();
