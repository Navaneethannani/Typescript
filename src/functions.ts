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


function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(2,3,5))

const names: string[] = ["nani", "abc", "def"]
const numbers: number[] = [1,2,4]

//rest parameters

    function getTotal(...numbers:number[]): number{
        let total = 0 
        numbers.forEach((num)=>total += num)
        return total
    }
    console.log(getTotal(1,2,3,4))

    function summarize(...args: (number | string | boolean)[]): [number, string, number] {
    let total = 0;
    let combinedString = '';
    let trueCount = 0;

    args.forEach((arg) => {
        if (typeof arg === 'number') {
        total += arg;
        } else if (typeof arg === 'string') {
        combinedString += arg;
        } else if (typeof arg === 'boolean' && arg === true) {
        trueCount += 1;
        }
    });

    return [total, combinedString, trueCount];
    }
  
    const [adds, concatenatedString, trueBooleans] = summarize(5, 'Hello', true, 10, false, 'World', true, 15);
    
    console.log({ adds });
    console.log({ concatenatedString });
    console.log({ trueBooleans });

    //function overloading

    function addition(a: number, b: number): number;
    function addition(a: string, b: string): string;

    function addition(a: any, b: any): any {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        } else if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
        throw new Error('Invalid arguments');
    }
    console.log(addition(10, 20));
    console.log(addition('Hello, ', 'world!'));