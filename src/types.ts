// Primitive types
let id_ = 5; // TS know it's a number
let firstName = "Danny"; // TS know it's string
let hasDogs = true; // TS know it's boolean (type inference)
// hasDogs = "yes";
let unit: number; // Declare variable without assigning a value
unit = 5;
firstName.toLowerCase();
console.log(firstName);

let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr);

firstName = "Anna";

let age: string | number;
age = 26;
age = "26";

let lastName = new String("Danny");
console.log(lastName);
