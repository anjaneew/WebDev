"use strict";
//Type Annotations With Objects
Object.defineProperty(exports, "__esModule", { value: true });
//method 1
//declares the type, then assigns values later.
let personExOne;
personExOne = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
        apartment: 5,
        street: "Wedding St",
        city: "Old Town",
    },
};
//method 2
//Define an object type with type annotations
//( declares the type and assigns values in one step.)
let personExTwo = {
    name: "Harry",
    age: 52,
    jobTitle: "Engineer", //optional
    address: {
        apartment: 25,
        street: "Wedding St",
        city: "Old Town",
    },
};
//Exercise:
/*1 Create an object type annotation for a variable carOne with properties:
        - brand (string)
        - model (string)
        - year (number)
        - optional color (string)
        - owner (object) with properties: name (string), age (number)
*/
let carOne;
/*2 Assign values to carOne later in the code and log all its properties.*/
carOne = {
    brand: "Audi",
    model: "V8",
    year: 2015,
    color: "red",
    owner: {
        name: "Merwin Silva",
        age: 32,
    },
};
console.log(carOne.brand);
console.log(carOne.model);
console.log(carOne.year);
console.log(carOne.color);
console.log(carOne.owner);
/*3 Create another object carTwo using inline type annotation with the same structure and assign values immediately.*/
let carTwo = {
    brand: "Lambogini",
    model: "Sr",
    year: 2025,
    color: "black",
    mileage: 2500, //5
    owner: {
        name: "Athula Adikari",
        age: 85,
    },
};
console.log(carTwo.brand);
console.log(carTwo.model);
console.log(carTwo.year);
console.log(carTwo.color);
console.log(carTwo.owner);
/*4 Modify the year of carTwo and log the updated object.*/
carTwo.year = 2010;
console.log(carTwo.year);
/*5 Add a new optional property mileage (number) to both objects and log them. */
console.log(carOne.mileage);
console.log(carTwo.mileage);
// All correct.
//# sourceMappingURL=04Objects.js.map