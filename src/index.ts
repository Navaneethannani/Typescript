let num1 :number = 50  // inline annotations
let num2 :number = 10   // inline annotations

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

//Type Alias

type pixels = {
    width: number,
    height : number
}

let pictures : pixels = {
    width: 23,
    height:23
}

console.log(pictures,"pixels")

//  Inline Type Annotations

// -- function parameters inline type annotation
function greet(person: { name: string; age: number ; isMajor : boolean }): void { 
	console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

greet({ name: "Nani", age: 22 , isMajor : true});

//Union Types

let result: number | string | boolean;
 
result = 42;
result = "Hello";
result = true
console.log(result,"Union")

// Enum type

enum Directions {
    North,
    East,
    South,
    West
  };
              
  let currentDirection = Directions.West;
  
  console.log(currentDirection);

//   Generics

function identity<T>(arg: T): T {
	return arg;
}
 
let animal: string = identity("Lion");
let year: number = identity(2024);

// function types

 
type AddFunction = (a: number, b: number) => number;
 
let add: AddFunction = (x, y) => x + y;

// class type
class Dog {
	breed: string;
 
	constructor(breed: string) {
    	this.breed = breed;
	}
}

let myDog: Dog = new Dog("German Shepherd");

console.log(myDog)