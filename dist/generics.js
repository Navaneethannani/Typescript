"use strict";
//Generics
function addDetails(name, age) {
    return [name, age];
}
let Nani = [];
Nani.push(addDetails("nani", 22));
let Messi = [];
Messi.push(addDetails("Messi", 34));
console.log(Nani, Messi, "Players");
