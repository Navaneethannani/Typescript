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

