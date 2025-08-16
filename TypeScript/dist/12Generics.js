"use strict";
//----------------------------------Generics--------------------------------------------------
/**Generics in TypeScript are a feature that allows you to write reusable code by passing a
 * type as a parameter to another type, whether it's a class, interface, or function.
 * No need to use 'any'.
 * Generics can be used in TypeScript to create:
                * Generic Classes.
                * Generic Functions.
                * Generic Interfaces.
                * Generic Methods.
 *
 * **/
Object.defineProperty(exports, "__esModule", { value: true });
//---------------------------Generics Intro------------------------------------------------
//Generic function - returns input value as it is
function makePens(val) {
    //type parameter T
    return val;
}
const pen1 = makePens(100);
const pen2 = makePens("Ronald");
const pen3 = makePens(true);
const pen4 = makePens([1, 2, 3, 4]);
console.log(`Same Function but with typesafe data that can change: 
                        \n 1. Number: ${pen1} 
                        \n 2. String: ${pen2} 
                        \n 3. Boolean: ${pen3} 
                        \n 4. Number Array: ${pen4} `);
/**Output
 *
 * Same Function but with typesafe data that can change:
    1. Number: 100
    2. String: Ronald
    3. Boolean: true
    4. Number Array: 1,2,3,4
*/
console.log("\n Arrow Function with Generics \n");
//---------------------Arrow Function with Generics---------------------------------------
const makePaper = (val) => val;
console.log(makePaper(80));
console.log(makePaper("handmade"));
//---------------------------Generics Multiple Types---------------------------------------
/**Generics in TypeScript can handle multiple types using union types or intersection types */
//---------------------------------Generics----------------------------------------------
//----------------------------------Generics------------------------------------------------
//----------------------------------Generics------------------------------------------------
//# sourceMappingURL=12Generics.js.map