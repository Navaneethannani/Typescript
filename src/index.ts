let num1 :number = 50
let num2 :number = 10

function multiple(num1:number , num2: number): number{
    return num1 * num2
}
console.log(multiple(num1, num2), "multiple");


let str :string = "nani"

console.log(str,"name")

let arr:string[] = ["nani", "games"]

console.log(arr,"array")

let tuple:[string, number] = ["nani" , 2]

console.log(tuple,"combine")

interface Person {
    name : string,
    age : number
}

let person : Person ={
    name: "nani",
    age: 22
}

console.log(person,"person");