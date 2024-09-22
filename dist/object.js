"use strict";
// Declare a variable called person with a specific object type annotation
let personn;
// Assign person to an object with all the necessary properties and value types
personn = {
    name: "Danny",
    location: "UK",
    isProgrammer: true,
};
let person1 = {
    name: "Danny",
    location: "UK",
    isProgrammer: true,
};
let person3 = {
    name: "Sarah",
    location: "Germany",
    isProgrammer: false,
};
let sayStuff = {
    sayHi: function (name) {
        return `Hi ${name}`;
    },
    sayBye: (name) => `Bye ${name}`,
};
console.log(sayStuff.sayHi("Heisenberg"));
console.log(sayStuff.sayBye("Heisenberg"));
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is", pt.x);
    console.log("The coordinate's y value is", pt.y);
}
let someObj = {
    x: 10,
    y: 5,
};
printCoord({ x: 3, y: 7 });
printCoord(someObj);
