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
function makePens(data) {
    //type parameter T
    return data;
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
function displayDataInfo(data) {
    return `The value is ${data} and it is a data of ${typeof data} type`;
}
console.log(displayDataInfo(100));
console.log(displayDataInfo("Claude is great"));
console.log(displayDataInfo(true));
console.log(displayDataInfo([1, 2, 3, 5, 7]));
//---------------------Arrow Function with Generics---------------------------------------
const makePaper = (data) => data;
console.log(makePaper(80));
console.log(makePaper("handmade"));
console.log("\n Generics Multiple Types \n");
//---------------------------Generics Multiple Types---------------------------------------
/**Generics in TypeScript can handle multiple types using union types or intersection types */
function rainbowDisplay(numColor, color) {
    return `\nThe number of colors are ${numColor} and colors are ${color}`;
}
console.log(rainbowDisplay(2, "purple"));
//-----------------------------Generics Classes--------------------------------------------
//create flexible and reusable class structures 
class Report {
    data;
    constructor(data) {
        this.data = data;
    }
    showData(msg) {
        console.log(`${msg} - ${this.data}`);
    }
}
//instance with string
let report1 = new Report("Dengue Eradication");
console.log(report1.data);
report1.showData("The statistics in Sri Lanka");
//instance with string or number
let report2 = new Report("2005");
console.log(report2.data);
report2.showData("The statistics in India");
class Collection {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.addItem({ itemType: "Book", title: "The Stranger", isbn: 1505832 });
itemOne.addItem({ itemType: "Book", title: "Moby Dick", isbn: 1505232 });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.addItem({ itemType: "Game", title: "Age of Mythology", price: 15.28 });
console.log(itemTwo);
//----------------------------------Generics------------------------------------------------
//# sourceMappingURL=12Generics.js.map