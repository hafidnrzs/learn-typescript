// Declare a variable called person with a specific object type annotation
let personn: {
    name: string;
    location: string;
    isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
personn = {
    name: "Danny",
    location: "UK",
    isProgrammer: true,
};

// personn.isProgrammer = "Yes"; // ERROR: should be a boolean

// personn = {
//     name: "John",
//     location: "US",
// };
// ERROR: missing isProgrammer property

/*
When defining signature of an object, use an interface.
Useful when we need to check multiple objects have the same properties and value types
*/
interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
}

let person1: Person = {
    name: "Danny",
    location: "UK",
    isProgrammer: true,
};

let person3: Person = {
    name: "Sarah",
    location: "Germany",
    isProgrammer: false,
};

// Declare function properties with function signature
interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
}

let sayStuff: Speech = {
    sayHi: function (name: string) {
        return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi("Heisenberg"));
console.log(sayStuff.sayBye("Heisenberg"));

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is", pt.x);
    console.log("The coordinate's y value is", pt.y);
}

let someObj = {
    x: 10,
    y: 5,
};
printCoord({ x: 3, y: 7 });
printCoord(someObj);
