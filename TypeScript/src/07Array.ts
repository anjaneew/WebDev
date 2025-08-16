//---------------------------Arrays-----------------------------------------

//----------------------Type Annotations With Arrays------------------------

let fruits: string[] = ["apple", "banana", "cherry"];

for (let i = 0 ; i < fruits.length; i++){
    console.log(fruits[i]?.toUpperCase());
}

//------------Type Annotations With Multidimensional Arrays-------------------

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["apple", "orange", "coconut"];
//a mixture of numeric and string values - Multidimensional????
let arrayThree: (string | number)[] = [1, 2, 3, 4, "apple", "orange", "coconut"];

//My note: This is Multidimensional Array
let mixedMultiArray: (string | number)[][] = [[1, "apple soda", 2.85], 
                                              [2, "backing soda", 0.75], 
                                              [3, "citric acid", 1.85] ]; 

//---------------------------Exercises--------------------------------------
/**1 Create an array named vehicles containing the following string values: "car", "bike", "truck". Use type annotations for the array.*/

let vehicles: string[] = ["car", "bike", "truck"];

/**2 Write a for loop to iterate over vehicles and log each vehicle name in lowercase.*/

for(let i = 0; i < vehicles.length; i++){
    console.log(vehicles[i]?.toLocaleLowerCase());
}

/**3 Create two separate arrays:
    ids containing the numbers 101, 102, 103, 104
    cities containing the strings "Paris", "London", "Berlin"
Use type annotations for both arrays.*/

let ids: number[] = [101, 102, 103, 104];
let cities: string[] = ["Paris", "London", "Berlin"];


/**4 Create a single array named mixedList that contains the values: 99, "train", 45, "ship", 78, "bus". Use type annotations to allow both numbers and strings.*/

let mixedList: (number | string)[] = [99, "train", 45, "ship", 78, "bus"];

/**5 Create a multidimensional array named productCatalog where each inner array contains:

a number (product code)
a string (product title)
a number (product price)

Use the following data for three products:
2001, "Notebook", 2.5
2002, "Pencil", 0.5
2003, "Eraser", 0.25*/

let productCatalog: (number | string)[][] = [[2001, "Notebook", 2.5], [2002, "Pencil", 0.5], [2003, "Eraser", 0.25]];

/**6 Log the product title of the third product in productCatalog to the console.*/

// console.log(productCatalog[2][1]);
console.log(productCatalog[2]?.[1]);//optional chaining
//                            //Manually corrected to run ts
