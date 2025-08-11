//TYPES


//TYPE ANNOTATIONS 

//declaration and assignment together

let myNumberExOne: number = 42;
let myStringExOne: string = "Hello, TypeScript";

//declaration and assignment seperate

let myNumberExTwo: number;
let myStringExTwo: string;

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

let myVariable: any = 42;
console.log(myVariable);
myVariable = "house";
console.log(myVariable);

//Exercise:

/*1 Declare three variables with explicit type annotations:

* a number named age with value 38
* a string named city with value "Riga"
* a boolean named isStudent with value false
*/

let age: number = 38; 
let city: string = "Riga";
let isStudent: boolean = false;

//2 Log all three variables in a single console.log statement separated by commas.

console.log(age, city, isStudent);

/**3 Declare two variables without assigning values, but with explicit types:

* a string named firstName
* a number named score
  Then assign "Anjanee" to firstName and 95 to score, and log them. */

let firstName: string;
let score: number;

firstName = "Anjanee";
score = 95;

console.log(firstName);
console.log(score);


/**4 Create a variable inferredType without type annotation, assign "Hello" to it, and log its type using typeof. */

let inferredType = "Hello";
console.log(typeof(inferredType));

/**5 Create a variable anyValue of type any, assign it a number, then a boolean, and log both values after each assignment. */

let anyValue: any = 58;
console.log(anyValue);
anyValue = false;
console.log(anyValue);


