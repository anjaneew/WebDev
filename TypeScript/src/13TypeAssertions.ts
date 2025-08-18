//----------------------------------Type Assertions--------------------------------------

//Type assertions in TypeScript are a way to explicitly inform the TypeScript compiler
//  about the expected type of a value, even when the compiler cannot determine it with
//  certainty.

let data: any = 1000;

//// Type assertion to treat "data" as a string
console.log((data as string).repeat(3));


//------------------------------------Exercises-----------------------------------------

/**1 Create a variable called `userInput` with type `any` and assign it the value 500
* Use type assertion to treat it as a string and call the `charAt(0)` method to get the first character
* Log the result*/

let userInput: any = 500;
console.log((userInput as string).charAt(0));

/**2 Create a variable called `mixedValue` with type `any` and assign it the string "Hello World"
* Use type assertion to treat it as a string and call the `toUpperCase()` method
* Log the result*/

let mixedValue: any = "Hello World";
console.log((mixedValue as string).toUpperCase());

/**3 Create a variable called `numberData` with type `any` and assign it the value 3.14159
* Use type assertion to treat it as a number and call the `toFixed(2)` method
* Log the result*/

let numberData: any = 3.14159;
console.log((numberData as number).toFixed(2));

/**4 Create a variable called `textInfo` with type `any` and assign it the string "TypeScript"
* Use type assertion to treat it as a string and call the `slice(4, 10)` method
* Log the result*/

let textInfo: any = "TypeScript";
console.log((textInfo as string).slice(4, 10));

/**5 Create a variable called `arrayData` with type `any` and assign it the array [1, 2, 3, 4, 5]
* Use type assertion to treat it as a number array and call the `length` property
* Log the result*/

let arrayData: any = [1, 2, 3, 4, 5];
console.log((arrayData as number[]).length);