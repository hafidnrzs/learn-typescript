"use strict";
// Primitive types
let x = 2;
let y = 1;
x = y;
y = 100;
console.log("Primitive type. x =", x);
// Reference types
let point1 = { x: 1, y: 1 };
let point2 = point1;
point1.y = 100;
console.log("Reference type. y =", point2.y);
