//----------------------Interface------------------------------------------------
//a way to define a contract or blueprint for the shape and structure of an object. 
// It specifies the properties, methods, and their types

//sample usage in a programme:

interface RectangleOptions{
    width: number;
    length: number;
    height?: number;
}

function drawRectangle(options: RectangleOptions): void {
    let width = options.width;
    let length = options.length;

    if(options.height){  //This is important cz js file doesnt know optional properties 
        let height = options.height; //otherwise it will throw an error
        //Draw logic...
    }

    //Draw logic...

}

drawRectangle({
    width: 100,
    length: 400,
    height: 500
});


//----------------------Interface------------------------------------------------

interface PersonEx1 {
    name: string;
    age: number;
}

const John: PersonEx1 = {
    name: "Johny Depp",
    age: 54,
};

//-------------------Interface Methods and Parameters---------------------------------

interface PersonEx2 {
    name: string;
    age: number;
    greet(message: string): void; //define method
}

const Captain: PersonEx2 = {
    name: "Captain Jack Sparrow",
    age: 35,
    greet(message: string) {
        console.log(`${this.name} says ${message}!!`);
    },
};

Captain.greet("Ohoy"); //Captain Jack Sparrow says Ohoy!!

//-------------------Reopen Interface & use cases---------------------------------
//Example: which part of an imaginary app is adding to the Settings interface. 
// It’s an example showing that interfaces can be declared in multiple files 
// (or multiple times in the same file) and TypeScript will merge them into one definition.


// Homepage Interface Declaration
interface Setting {
    readonly theme: boolean;
    font: string;
}

// Articles Page Interface Reopening
interface Setting {
    sidebar: boolean;
}

// Contact Page Interface Reopening
interface Setting {
    external: boolean;
}

// Create an object 'userSettings' that adheres to the merged 'Settings' interface
let userSettings: Setting = {
    theme: true,
    font: "Arial",
    sidebar: false,
    external: true,
};


//----------------------HTMLElement Interfaces------------------------------------------------
//because TS is a compiled language than JS, it is not able to see what type of element 
//we select from DOM. So we have to specify. As a plus point, when we do select that
//TS gives us additional properties Ex: HTMLSelectElement > autocomplete, disable


//                                                    THIS PART NEW
const input = document.querySelector('.form-control') as HTMLInputElement; 

input.value // now we can work with it

//Other examples HTMLElement, HTMLDivElement, HTMLAnchorElement, HTMLImageElement

//ex: HTMLImageElement has
//      Properties: alt, height, src, width
//      Methods: complete, decode(): Promise<void>, naturalHeight, naturalWidth


const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";

if(imgElement.complete){
    console.log(`Image dimensions: ${imgElement.naturalWidth} x ${imgElement.naturalHeight}`);
}

else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth} x ${imgElement.naturalHeight}`);
    });
}

//------------------Interfaces      VS              Type Aliases-----------------------------------
/**                                         
1. Declaration      interface keyword               type keyword
2. Extending        ✔️ extends keyword                  ❌
3. Implementing     ✔️ implements keyword               ❌
4. Compatibility    Supports declaration merging         ❌
                    (same name = merge)
5. Extensibility    defining contracts in classes   create custom types
6. Readability      Preferred                           Useful
 */

interface Animal {
    type: string;
}

interface Dog extends Animal {
    bark(): void;
}

class Labrador implements Dog {
    // type: "dog"; //Manually corrected to run ts - 
                    // error cz it expects type
    type: string = "dog";
    bark(){
        console.log("Baw Baw Baw!!!");
    }
}

//------------------------------Exercises--------------------------------------------

/**1 Define an interface SquareOptions with properties:
 * * sideLength (number)
 * * color (string)
 * * optional borderWidth (number)
 */

interface SquareOptions{
    sideLength: number;
    color: string;
    borderWidth?: number;
}

/**2 Write a function drawSquare that takes a SquareOptions object and:
 * * logs "Drawing a square of side {sideLength} and color {color}"
 * * if borderWidth is provided, also log "Border width: {borderWidth}"
 */

function drawSquare(options: SquareOptions): void{
    let sideLength = options.sideLength;
    let color = options.color;
    if(options.borderWidth){
       console.log(`Drawing a square of side ${sideLength} and color ${color} Border width: ${options.borderWidth}`);
    }
    else{
        console.log(`Drawing a square of side ${sideLength} and color ${color}`);
    }

}

/**3 Define an interface Employee with properties:
 * * firstName (string)
 * * lastName (string)
 * * age (number)
 */

interface Employee {
    firstName: string;
    lastName: string;
    age: number;
}

/**4 Create a constant named Alice of type Employee with suitable values. */

const Alice: Employee = {
    firstName: "Alice",
    lastName: "Anderson",
    age: 35,
}

/**5 Define an interface EmployeeEx with a method:
 * * fullName(greeting: string): void
 */

interface EmployeeEx extends Employee {
    fullName(greeting: string): void;
}

/**6 Create a constant Bob of type EmployeeEx and implement fullName so that
 * it logs "{firstName} {lastName} says {greeting}!"
 */

const Bob: EmployeeEx = {
    firstName: "Bob",
    lastName: "Marley",
    age: 68,
    fullName(greeting: string){
        console.log(`${this.firstName} ${this.lastName} says ${greeting}`);
    },
};

/**7 Reopen the interface Settings with:
 * * theme (readonly boolean)
 * * font (string)
 */

interface Settings {
    readonly theme: boolean;
    font: string;
}

/**8 Add a reopened interface Settings with:
 * * notifications (boolean)
 */

interface Settings {
    notifications: boolean;
}

/**9 Create an object mySettings of type Settings with all properties assigned. */

const mySettings: Settings = {
    theme: true,
    font: "Arial",
    notifications: true,
};

/**10 Use DOM element typing:
 * * Select an element with class 'username' as HTMLInputElement
 * * Assign a value to it
 */

const username = document.querySelector('.username') as HTMLInputElement;
username.value = "50";

/**11 Create an HTMLImageElement, assign src and alt, then log its
 * naturalWidth and naturalHeight after it has loaded.
 */
const myImg: HTMLImageElement = document.createElement('img');
myImg.src = "https://cdn.barbora.lv/products/1b17818e-85ed-4202-9271-06034c0d1f57_m.png";
myImg.alt = "food";

if(myImg.complete){
    console.log(`The image is ${myImg.naturalWidth} x ${myImg.naturalHeight}.`);
}
else{
    myImg.addEventListener("load", () => {
        console.log(`The image is ${myImg.naturalWidth} x ${myImg.naturalHeight}.`);
    });
}

/**12 Compare Interfaces vs Type Aliases:
 * * Write a comment showing which one supports extension, implementation, and merging
 */

//interfaces supports extensions and implementation, and merging. Type Aliases do not. 

/**13 Define interfaces Creature (type: string) and Parrot extends Creature with method speak(): void
 * Then create a class Macaw implementing Parrot with proper property and method
 */

//I glanced at your answer.

 interface Creature{
    type: string;
 }

 interface Parrot extends Creature {
    speak(): void;
 }

 class Macaw implements Parrot {
    type: string = "Macaw";
    speak(): void{
        console.log(`${this.type}!!!!`)
    }
 }

 const myParrot = new Macaw();
 myParrot.speak();