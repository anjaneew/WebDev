"use strict";
//-----------------------Type-System-Concepts----------------------
Object.defineProperty(exports, "__esModule", { value: true });
//---------------------------Union Types----------------------
// Union Types specify that the variable can hold values of multiple types.
let myVar;
myVar = "home"; // ✔️
console.log(myVar);
myVar = 3; // ✔️
console.log(myVar);
// myVar = false; // ❌
//-------------------------Literal Types-------------------------
//Literal types are a type system feature in TypeScript that allow you to specify 
// exactly which values are allowed for a particular variable or function parameter.
//  Instead of using a general type like string or number
let directions;
function setColor(color) {
    //.....
}
//-------------------------Nullable Types-------------------------
let username = "Glicher";
let ageEx = null;
function greetUser(username) {
    if (username === null) {
        console.log("Hello Guest!");
    }
    else {
        console.log(`Hello ${username}`);
    }
}
greetUser("Glitcher"); // Output: Hello Glitcher!
greetUser(null); // Output: Hello Guest!
let myName = "Glitcher";
let myValue = 10;
const alice = {
    name: "Alice",
    age: 30,
    email: "alice@gmail.com",
};
const bob = {
    name: "bob",
    age: 12,
};
console.log(alice);
console.log(bob);
const person = {
    name: "Little John",
    age: 30,
    address: "123, Sherwood Forest",
    phone: "123-456-789",
};
console.log(person);
//-------------------------Exercises----------------------------------
/**1 Declare a variable myVar that can hold either a string or a number. Assign it the
 * value "office" and log it, then assign the value 42 and log it.*/
let myVar2; //myVar is already in the file
myVar2 = "office";
console.log(myVar2);
myVar2 = 42;
console.log(myVar2);
/**2 Define a variable move that accepts  literal strings "left", "right", "up", or
 * "down" and logs the direction passed. */
let move;
/**3 Write a function paint that accepts only the string literals "yellow", "purple",
 * or "orange" as a parameter. Call it with "purple".*/
function paint(color) {
    console.log(color);
}
paint("purple");
/**4 Declare a variable user that can be either a string or null. Assign it a name string
 *  and log a greeting. Then assign null and log a different greeting.*/
let user;
user = "Robin Hood";
console.log(`Hello ${user}`);
user = null;
console.log(`Hi! Enter your username: ${user}`);
let id = 4001;
id = "Marion";
let person1 = {
    firstName: "Brother",
    lastName: "Tuck",
};
const Robin = {
    username: "Robin Hood",
    email: "robin@sherwood.com",
    phone: "000-000-001",
    bio: "Stealing from the rich to give to poor."
};
console.log(Robin);
//# sourceMappingURL=06TypeSystemConcepts.js.map