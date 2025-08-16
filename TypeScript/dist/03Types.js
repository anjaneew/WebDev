"use strict";
//TYPES
Object.defineProperty(exports, "__esModule", { value: true });
//TYPE ANNOTATIONS 
//declaration and assignment together
let myNumberExOne = 42;
let myStringExOne = "Hello, TypeScript";
//declaration and assignment seperate
let myNumberExTwo;
let myStringExTwo;
myNumberExTwo = 43;
myStringExTwo = "This is not that bad";
console.log("My number is:", myNumberExOne);
console.log("My string is:", myStringExOne);
console.log("My number is:", myNumberExTwo);
console.log("My string is:", myStringExTwo);
// DYNAMIC TYPE DETERMINATION *
//This is still possible but not recommended
let greeting = "Hi, How are you?";
console.log(greeting);
//ANY TYPE
let myVariable = 42;
console.log(myVariable);
myVariable = "house";
console.log(myVariable);
//Exercise:
/*1 Declare three variables with explicit type annotations:

* a number named age with value 38
* a string named city with value "Riga"
* a boolean named isStudent with value false
*/
let age = 38;
let city = "Riga";
let isStudent = false;
//2 Log all three variables in a single console.log statement separated by commas.
console.log(age, city, isStudent);
/**3 Declare two variables without assigning values, but with explicit types:

* a string named firstName
* a number named score
  Then assign "Anjanee" to firstName and 95 to score, and log them. */
let firstName;
let score;
firstName = "Anjanee";
score = 95;
console.log(firstName);
console.log(score);
/**4 Create a variable inferredType without type annotation, assign "Hello" to it, and log its type using typeof. */
let inferredType = "Hello";
console.log(typeof (inferredType));
/**5 Create a variable anyValue of type any, assign it a number, then a boolean, and log both values after each assignment. */
let anyValue = 58;
console.log(anyValue);
anyValue = false;
console.log(anyValue);
//All correct.
//# sourceMappingURL=03Types.js.map