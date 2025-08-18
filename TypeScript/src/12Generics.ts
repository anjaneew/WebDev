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

//---------------------------Generics Intro------------------------------------------------

//Generic function - returns input value as it is
function makePens<T>(data: T): T {
                //type parameter T
    return data;
}

const pen1: number = makePens<number>(100);
const pen2: string = makePens<string>("Ronald");
const pen3: boolean = makePens<boolean>(true);
const pen4: number[] = makePens<number[]>([1,2,3,4]);

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



function displayDataInfo<T>(data: T): string{
    return `The value is ${data} and it is a data of ${typeof data} type \n`;
}

console.log(displayDataInfo(100)+"\n");
console.log(displayDataInfo("Claude is great")+"\n");
console.log(displayDataInfo(true)+"\n");
console.log(displayDataInfo([1,2,3,5,7])+"\n");

console.log("\n Arrow Function with Generics \n"); 

//---------------------Arrow Function with Generics---------------------------------------

const makePaper = <T>(data: T): T => data;

console.log(makePaper<number>(80));
console.log(makePaper<string>("handmade"));


console.log("\n Generics Multiple Types \n"); 
//---------------------------Generics Multiple Types---------------------------------------
/**Generics in TypeScript can handle multiple types using union types or intersection types */

function rainbowDisplay<T, S>(numColor: T, color: S): string {
    return `\nThe number of colors are ${numColor} and colors are ${color}`;
}

console.log(rainbowDisplay(2, "purple"));


//-----------------------------Generics Classes--------------------------------------------
//create flexible and reusable class structures 

class Report<T = string>{
    constructor(public data: T){

    }

    showData(msg: T): void {
        console.log(`${msg} - ${this.data}`);
    }
}

//instance with string
let report1 = new Report<string>("Dengue Eradication");
console.log(report1.data);
report1.showData("The statistics in Sri Lanka");

//instance with string or number
let report2 = new Report<string | number>("2005");
console.log(report2.data);
report2.showData("The statistics in India");

//-------------------------Generics And Interfaces--------------------------------------
//create reusable and type-safe data structures that can work with different types, 
//enhancing code flexibility and maintainability.

interface Book{
    itemType: string;
    title: string;
    isbn: number;
}

interface Game{
    itemType: string;
    title: string;
    price: number;
}

class Collection<T>{
    public data: T[] = []; //initialized as empty array of type T
    //no additional setup needed. 

    //NO CONSTRUCTOR - //TypeScript's default constructor handles the generic type parameter automatically

    addItem(item: T): void {
        this.data.push(item);
    }
}

let itemOne = new Collection<Book>();
itemOne.addItem({itemType: "Book", title: "The Stranger", isbn: 1505832});
itemOne.addItem({itemType: "Book", title: "Moby Dick", isbn: 1505232});
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.addItem({itemType: "Game", title: "Age of Mythology", price: 15.28});
console.log(itemTwo);

//------------------------Exercises--------------------------------------
//-----------------------Generics Intro Exercises-------------------------

/**1 ✔️ Create a generic function called `processItem` that:
* Takes a parameter `item` of type T
* Returns the same item unchanged
* Test it with: number 42, string "TypeScript", boolean false, and array [10, 20, 30]*/

function processItem<T>(item: T): T{
    return item;
}

console.log(processItem(42));
console.log(processItem("TypeScript"));
console.log(processItem(false));
console.log(processItem([10, 20, 30]));

/**2 ✔️ Create a generic function called `describeValue` that:
* Takes a parameter `value` of type T  
* Returns a string in format: "Value: [value] has type: [typeof value]"
* Test with: number 250, string "Learning", boolean true, array [5, 10, 15]*/

function describeValue<T>(value: T): string{
    return `Value: ${value} has type: ${typeof value}`;
}

console.log(describeValue(250));
console.log(describeValue("Learning"));
console.log(describeValue(true));
console.log(describeValue([5, 10, 15]));

/**3 ✔️ Create an arrow function called `wrapItem` using generic syntax that:
* Takes a parameter `content` of type T
* Returns the same content
* Test with: number 77, string "Arrow Function"*/

const wrapItem = <T>(content: T): T => content;
console.log(wrapItem(77));
console.log(wrapItem("Arrow Function"));

//---------------------------Generics Multiple Types Exercises---------------------

/**4 ✔️ Create a generic function called `combineItems` that:
* Takes two parameters: `first` of type T and `second` of type U
* Returns a string: "First item: [first], Second item: [second]" 
* Test with: string "Apple" and number 5, boolean true and string "Complete"*/

function combineItems<T, U>(first: T, second: U): string{
    return `First item: ${first}, Second item: ${second}`;
}

console.log(combineItems("Apple", 5));
console.log(combineItems(true, "Complete"));

/**5 Create a generic function called `compareValues` that:
* Takes two parameters: `valueA` of type T and `valueB` of type U
* Returns a string: "Comparing [valueA] (type: [typeof valueA]) with [valueB] (type: [typeof valueB])"
* Test with: number 100 and string "hundred", string "active" and boolean true*/

function compareValues<T,U>(valueA: T, valueB: U): string{
    return `Comparing ${valueA} (type: ${typeof valueA}) with ${valueB} (type: ${typeof valueB})`;
}

console.log(compareValues(100, "hundred"));
console.log(compareValues("active", true));
//---------------------------Generics Classes Exercises---------------

/**6 Create a generic class called `Storage` with default type string that:
* Has a constructor taking a parameter `content` of type T and assigns it to public property `content`
* Has a method `display` that takes parameter `label` of type T and logs: "[label]: [content]"
* Create instance with string "Database Records" and call display with "Current Data"
* Create instance with number|string type, value 2024, and call display with "Year"*/

class Storage<T = string>{

    constructor(public content: T){
         //NOTE THAT I AM NOT SURE ABOUT THIS ANSWER- CORRECT ME IF I AM WRONG 
    }

    display(label: T): void{
        console.log(`${label} : ${this.content}`);
    }
}


const record1 = new Storage<string>("Database Records");
record1.display("Current Data");

const record2 = new Storage<number |string>(2024);
record2.display("Year");

/**7 Create a generic class called `Container` with default type number that:
* Has a constructor taking parameter `item` of type T and assigns it to public property `item` 
* Has a method `showInfo` that takes parameter `description` of type T and logs: "[description] -> [item]"
* Create instance with string "Configuration File" and call showInfo with "System Config"
* Create instance with boolean|number type, value false, and call showInfo with "Status Check"*/

class Container<T= number>{
    constructor(public item: T){
        //NOTE THAT I AM NOT SURE ABOUT THIS ANSWER- CORRECT ME IF I AM WRONG
    }

    showInfo(description: T): void{
        console.log(`${description} -> ${this.item} `);
    }
}

const container1 = new Container<string>("Configuration File");
container1.showInfo("System Config"); 

const container2 = new Container<boolean | string>(false);
container2.showInfo("Status Check"); //since parameter number would give an error I changed 

//---------------------------Generics And Interfaces Exercises-------------

/**8 ✔️ Define an interface `Vehicle` with properties:
* itemType: string
* brand: string  
* model: string
* year: number*/

interface Vehicle{
    itemType: string;
    brand: string;
    model: string;
    year: number;
}

/**9 ✔️ Define an interface `Electronics` with properties:
* itemType: string
* name: string
* warranty: number*/

interface Electronics{
    itemType: string;
    name: string;
    warranty: number;  
}

/**10 Create a generic class called `Inventory` that:
* Has a public property `items` initialized as empty array of type T
* Has method `addProduct` that takes parameter `product` of type T and pushes it to items array
* Create instance for Vehicle type and add: {itemType: "Vehicle", brand: "Toyota", model: "Camry", year: 2023}
* Create instance for Electronics type and add: {itemType: "Electronics", name: "Smartphone", warranty: 24}
* Log both instances to see the results*/

class Inventory<T>{
    public items: T[] = []; //The items property is initialized directly: 
    //No additional setup is required

    //NO CONSTRUCTOR HERE ^ 

    addProduct(product: T){
        this.items.push(product);
    }
}

const vehicle1 = new Inventory<Vehicle>();
vehicle1.addProduct({itemType: "Vehicle", brand: "Toyota", model: "Camry", year: 2023});
console.log(vehicle1);

const electronic1 = new Inventory<Electronics>();
electronic1.addProduct({itemType: "Electronics", name: "Smartphone", warranty: 24});
console.log(electronic1);


