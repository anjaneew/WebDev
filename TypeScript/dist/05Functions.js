"use strict";
//Functions
Object.defineProperty(exports, "__esModule", { value: true });
//Type Annotations With Function
//                                                                              return type
function calculateRectangleArea(lendthRectangle, widthRectangle) {
    return lendthRectangle * widthRectangle;
}
const lendthOfRectangle = 5;
const widthOfRectangle = 3;
const area = calculateRectangleArea(lendthOfRectangle, widthOfRectangle);
console.log(area);
//Optional And Default Parameter
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log(`Happy Birthday ${name} ! You are ${age}.`);
    }
    else {
        console.log(`Happy Birthday ${name} !`);
    }
}
greetOptional("Alice"); // Output: "Happy Birthday Alice!"
greetOptional("Mary", 11); // Output: "Happy Birthday Mary! You are 11."
// Default Parameters:
function greetingDefault(name, age = 25) {
    console.log(`Happy Birthday ${name} ! You are ${age}.`);
}
greetingDefault("Alice"); // Output: "Happy Birthday Alice! You are 25."
greetingDefault("Mary", 11); // Output: "Happy Birthday Mary! You are 11."
//Function Rest Parameter
function addAll(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) { //since it sis i < nums.length the loop stops before the last one
        result += nums[i];
    }
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 170.5
//pro tip 
//+true in JavaScript is a unary plus operator (+) - converts boolean true to number 1
// it is applied to the boolean true,  resulting in the numeric value 1. 
// so 10.5 + +true adds 10.5 + 1 = 11.5.
//Arrow Function 
//sometimes called "fat arrow"
const addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(10, 20)); //Output: 30
//Anonymous Function
// define the function directly as an expression
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(20, 30)); // output 50
//void & never
//void - function returns nothing.
//some has no return type declared (implicitly void) but this one is explicit and thus clearer.
function greet(name) {
    console.log(`Hello ${name}`);
}
//never
//never type is used to represent values that never occur. 
//functions that never return:  
// either because they throw exceptions, 
// enter infinite loops, or 
// have unreachable code.
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        //This function never exits (infinite loop).
    }
}
/**Exercise:

1 Write a function calculateTriangleArea with parameters baseTriangle (number) and heightTriangle (number) that returns the area of the triangle. Log the result when calling it with values 10 and 5. */
function calculateTriangleArea(baseTriangle, heightTriangle) {
    return (heightTriangle * baseTriangle) / 2;
}
calculateTriangleArea(10, 5);
/**2 Create a function introduceOptional that takes a required name (string) and an optional country (string). If the country is provided, log “Hello \[name] from \[country]!”, otherwise log “Hello \[name]!”. Call it twice: once with both arguments, once with only the name. */
function introduceOptional(name, country) {
    if (country !== undefined) {
        console.log(`Hello ${name} from ${country}!`);
    }
    else {
        console.log(`Hello ${name}!`);
    }
}
introduceOptional("bob", "india");
introduceOptional("sanga");
/**3 Write a function greetWithDefault that takes a name (string) and an age (number) defaulting to 30. Log a greeting message including the name and age. Call it once without providing the age and once with a custom age. */
function greetWithDefault(name, age = 30) {
    console.log(`Happy Birthday ${name}! Today you are ${age}`);
}
;
greetWithDefault("Merwin");
/**4 Create a function multiplyAll using a rest parameter nums (number\[]) that multiplies all numbers together and returns the result. Call it with the numbers 2, 3, 4 and log the output. */
function multiplyAll(...nums) {
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        result *= nums[i];
    }
    return result;
}
multiplyAll(2, 3, 4);
/**5 Define an arrow function subtractWithArrow that takes two numbers and returns their difference. Call it with values 50 and 15 and log the result. */
const subtractWithArrow = (num1, num2) => num1 - num2;
subtractWithArrow(50, 15);
/**6 Create an anonymous function assigned to a constant divide that takes two numbers and returns the result of dividing the first by the second. Call it with values 100 and 4 and log the result. */
const divide = function (num1, num2) {
    return num1 / num2;
};
divide(100, 4);
/**7 Write a function sayHello that takes a name (string) and explicitly returns void. It should log “Hi \[name]”. Call it with your own name. */
function sayHello(name) {
    console.log(`Hi ${name}`);
}
sayHello("Anjanee");
/**8 Create a function triggerError that takes a message (string) and always throws a new Error with that message (never return). Call it once to see the error in the console. */
function triggerError(message) {
    throw new Error(message);
}
triggerError("File not found");
/**9 Write a function endlessCounter that never ends (never return) and logs numbers starting from 1 and increasing forever in a loop. */
function endlessCounter() {
    let i = 1;
    while (true) {
        console.log(i);
        i++;
    }
}
//# sourceMappingURL=05Functions.js.map