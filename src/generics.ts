//Generics

function addDetails <A , B>(name:A, age :B ):[A,B]{
    return [name,age];
}

let Nani: [string, number][] = []
Nani.push(addDetails<string,number>("nani",22))

let Messi: [string, number][] = []
Messi.push(addDetails<string,number>("Messi",34))

console.log(Nani,Messi,"Players")