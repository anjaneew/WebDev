//-----------------------Type-System-Concepts----------------------



//---------------------------Union Types----------------------
// Union Types specify that the variable can hold values of multiple types.

let myVar: string | number;

myVar = "home"; // ✔️
console.log(myVar);
myVar = 3; // ✔️
console.log(myVar);

    // myVar = false; // ❌

//-------------------------Literal Types-------------------------
//Literal types are a type system feature in TypeScript that allow you to specify 
// exactly which values are allowed for a particular variable or function parameter.
//  Instead of using a general type like string or number

let directions: "left" | "right" | "up" | "down";

function setColor(color: "red" | "green" | "blue"){
    //.....
}

//-------------------------Nullable Types-------------------------

let username: string | null = "Glicher";
let ageEx: number | null = null;

function greetUser(username: string | null): void{
    if(username === null){
        console.log("Hello Guest!");
    }
    else{
        console.log(`Hello ${username}`);
    }
}

greetUser("Glitcher");// Output: Hello Glitcher!
greetUser(null); // Output: Hello Guest!

//-------------------------Type Alias-------------------------
//A Type Alias in TypeScript allows you to create a custom name for a type.

type MyString =  string;
type MyStringOrNumber = string | number;

let myName: MyString = "Glitcher";
let myValue: MyStringOrNumber = 10;

type Employee = {
    name: string;
    age: number;
    email?: string;
};

const alice: Employee = {
    name: "Alice",
    age: 30,
    email: "alice@gmail.com",
};

const bob: Employee = {
    name: "bob",
    age: 12,
};

console.log(alice);
console.log(bob);

//-------------------------Intersection Type-------------------------
//An intersection type in TypeScript allows you to combine multiple types into one,
//  creating a new type that has all the properties and functionalities of the individual 
// types being intersected.

type FirstType = {
    name: string;
    age: number;
};

type SecondType = {
    address: string;
    phone: string;
};

type CombinedType = FirstType & SecondType;

const person: CombinedType = {
    name: "Little John",
    age: 30,
    address: "123, Sherwood Forest",
    phone: "123-456-789",
};

console.log(person);

//-------------------------Exercises----------------------------------

/**1 Declare a variable myVar that can hold either a string or a number. Assign it the 
 * value "office" and log it, then assign the value 42 and log it.*/

let myVar2: string | number; //myVar is already in the file
myVar2 = "office";
console.log(myVar2);
myVar2 = 42;
console.log(myVar2);

/**2 Define a variable move that accepts  literal strings "left", "right", "up", or 
 * "down" and logs the direction passed. */

let move: "left" | "right" | "up" | "down";


/**3 Write a function paint that accepts only the string literals "yellow", "purple", 
 * or "orange" as a parameter. Call it with "purple".*/

function paint(color: "yellow" | "purple" | "orange"){
    console.log(color);
}

paint("purple");

/**4 Declare a variable user that can be either a string or null. Assign it a name string
 *  and log a greeting. Then assign null and log a different greeting.*/

let user: string | null;

user =  "Robin Hood";
console.log(`Hello ${user}`);

user = null;
console.log(`Hi! Enter your username: ${user}`);

/**5 Create a type alias Identifier for string | number. Declare a variable id of type
 *  Identifier and assign it a number, then a string.*/

type Identifier = string | number;
let id: Identifier = 4001;
id = "Marion";

/**6 Define a type alias Person for an object with properties firstName (string), 
 * lastName (string), and optional age (number). Create an object of type Person without
 *  the age property.*/

type Person = {
    firstName: string;
    lastName: string;
    age?: number
}

let person1: Person = {
    firstName: "Brother",
    lastName: "Tuck",
}

/**7 Define two types: Contact with email and phone strings, and Profile with username
 *  (string) and bio (string). Create a new type UserProfile combining both using 
 * intersection. Declare an object of type UserProfile and assign values to all properties.*/

type Contact = {
    email: string;
    phone: string;
};

type Profile = {
    username: string;
    bio: string;
};

type UserProfile =  Contact & Profile;

const Robin: UserProfile = {
    username: "Robin Hood",
    email: "robin@sherwood.com",
    phone: "000-000-001",
    bio: "Stealing from the rich to give to poor."
};

console.log(Robin); 