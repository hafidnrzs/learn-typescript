let ids: number[] = [1, 2, 3, 4, 5]; // can only contain number
let names: string[] = ["Danny", "Anna", "Bazza"]; // can only contain string
let options: boolean[] = [true, false, false]; // can only contain true or false
let books: object[] = [
    { name: "Fooled by randomness", author: "Nassim Taleb" },
    { name: "Sapiens", author: "Yuval Noah Harari" },
]; // can only contain objects
let arr1: any[] = ["hello", 1, true]; // any basically reverts Typescript back into Javascript

ids.push(6);
// ids.push("7"); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'

// Multiple types array using union
let person: (string | number | boolean)[] = ["Danny", 1, true];
person[0] = 100;
// person[1] = { name: "Danny" }; // ERROR: Person array can't contain objects

let person2 = ["Danny", 1, true]; // initialise a variable with a value not necessary to declare the type
person[0] = 100;
// person[1] = { name: "Danny" };

// Tuple: special type of array. fixed size & known datatypes
let tuple1: [string, number, boolean] = ["Danny", 1, true];
// let tuple2: [number, string, boolean] = ["Danny", 2, false]; // Error
// tuple1[0] = 100; // Error: type 'number' isn't assignable to 'string'
