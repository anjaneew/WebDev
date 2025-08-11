//Functions

//Type Annotations With Function

//                                                                              return type
function calculateRectangleArea(lendthRectangle: number, widthRectangle: number): number {
    return lendthRectangle * widthRectangle;
}

const lendthOfRectangle = 5;
const widthOfRectangle = 3;
const area = calculateRectangleArea(lendthOfRectangle, widthOfRectangle);
console.log(area);

//Optional And Default Parameter

function greetOptional(name: string, age?: number){
    if (age !== undefined){
        console.log(`Happy Birthday ${name} ! You are ${age}.`);
    }
    else{
        console.log(`Happy Birthday ${name} !`);
    }
}

greetOptional("Alice");// Output: "Happy Birthday Alice!"
greetOptional("Mary", 11);// Output: "Happy Birthday Mary! You are 11."

// Default Parameters:

function greetingDefault(name: string, age: number = 25){
    console.log(`Happy Birthday ${name} ! You are ${age}.`);
}

greetingDefault("Alice");// Output: "Happy Birthday Alice! You are 25."
greetingDefault("Mary", 11);// Output: "Happy Birthday Mary! You are 11."

//Function Rest Parameter

function addAll(...nums: number[]): number{
    let result = 0;
    for (let i = 0; i < nums.length; i++) { //since it sis i < nums.length the loop stops before the last one
        result += nums[i];
    }

    return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));// Output: 170.5

//pro tip 
//+true in JavaScript is a unary plus operator (+) - converts boolean true to number 1
// it is applied to the boolean true,  resulting in the numeric value 1. 
// so 10.5 + +true adds 10.5 + 1 = 11.5.

//Arrow Function 
//sometimes called "fat arrow"

const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20)); //Output: 30

//Anonymous Function
// define the function directly as an expression

const add = function(num1: number, num2: number): number{
    return num1 + num2;
}

console.log(add(20, 30))// output 50

//void & never

//void - function returns nothing.
//some has no return type declared (implicitly void) but this one is explicit and thus clearer.
function greet(name: string):  void {
    console.log(`Hello ${name}`);
}

//never
//never type is used to represent values that never occur. 
//functions that never return:  
    // either because they throw exceptions, 
    // enter infinite loops, or 
    // have unreachable code.

function throwError(message: string): never {
    throw new Error(message);
}    

function infiniteLoop(): never {
    while(true){
        //This function never exits (infinite loop).
    }
}



