class Admin {
    ssn: number;
    firstName: string;
    lastName: string;

    constructor(ssn: number, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let admin = new Admin(171280926, 'John', 'Doe');
console.log(admin,"admin")


//access modifier

class Animal {
    public name: string;

    private age: number;

    protected species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public getInfo(): string {
        return `${this.name} is a ${this.species}.`;
    }

    private getAge(): number {
        return this.age;
    }
    
    protected getSpecies(): string {
        return this.species;
    }
}

const species = new Animal('dog',22,'german');
console.log(species.name)
// console.log(species.age) //private only show inside the class so it will through error
// console.log(species.species) // protected only used inside the class or inheritance class

//Inheritance
class Human {
    constructor(private fName: string,private lName: string){}

    getFullName(): string {
        return `${this.fName} ${this.lName}`
    }
    describe(): string{
        return `This is ${this.getFullName()}.`
    }
}

class Employee extends Human{
    private static headCount = 0;
    constructor(
        fName : string,
        lName : string,
        public jobTitle: string){
        super(fName,lName);
        Employee.headCount++;
    }
    describe(): string {
        return super.describe() + `I am a ${this.jobTitle}`
    }
    public static getHeadCount(){
        return Employee.headCount;
    }

}

let employee = new Employee("nani", "saga","FullStack Developer")
let Navi = new Employee("Navi","abc","Back-end Developer")

console.log(employee.getFullName())
console.log(employee.describe())
console.log(Employee.getHeadCount())