"use strict";
//----------------------Interface------------------------------------------------
//a way to define a contract or blueprint for the shape and structure of an object. 
// It specifies the properties, methods, and their types
Object.defineProperty(exports, "__esModule", { value: true });
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
    if (options.height) { //This is important cz js file doesnt know optional properties 
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
const John = {
    name: "Johny Depp",
    age: 54,
};
const Captain = {
    name: "Captain Jack Sparrow",
    age: 35,
    greet(message) {
        console.log(`${this.name} says ${message}!!`);
    },
};
Captain.greet("Ohoy"); //Captain Jack Sparrow says Ohoy!!
// Create an object 'userSettings' that adheres to the merged 'Settings' interface
let userSettings = {
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
const input = document.querySelector('.form-control');
input.value; // now we can work with it
//Other examples HTMLElement, HTMLDivElement, HTMLAnchorElement, HTMLImageElement
//ex: HTMLImageElement has
//      Properties: alt, height, src, width
//      Methods: complete, decode(): Promise<void>, naturalHeight, naturalWidth
const imgElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth} x ${imgElement.naturalHeight}`);
}
else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth} x ${imgElement.naturalHeight}`);
    });
}
class Labrador {
    type; //error cz it expects type: string = "dog"; insted
    bark() {
        console.log("Baw Baw Baw!!!");
    }
}
/**2 Write a function drawSquare that takes a SquareOptions object and:
 * * logs "Drawing a square of side {sideLength} and color {color}"
 * * if borderWidth is provided, also log "Border width: {borderWidth}"
 */
function drawSquare(options) {
    let sideLength = options.sideLength;
    let color = options.color;
    if (options.borderWidth) {
        console.log(`Drawing a square of side ${sideLength} and color ${color} Border width: ${options.borderWidth}`);
    }
    else {
        console.log(`Drawing a square of side ${sideLength} and color ${color}`);
    }
}
/**4 Create a constant named Alice of type Employee with suitable values. */
const Alice = {
    firstName: "Alice",
    lastName: "Anderson",
    age: 35,
};
/**6 Create a constant Bob of type EmployeeEx and implement fullName so that
 * it logs "{firstName} {lastName} says {greeting}!"
 */
const Bob = {
    firstName: "Bob",
    lastName: "Marley",
    age: 68,
    fullName(greeting) {
        console.log(`${this.firstName} ${this.lastName} says ${greeting}`);
    },
};
/**9 Create an object mySettings of type Settings with all properties assigned. */
const mySettings = {
    theme: true,
    font: "Arial",
    notifications: true,
};
/**10 Use DOM element typing:
 * * Select an element with class 'username' as HTMLInputElement
 * * Assign a value to it
 */
const username = document.querySelector('.username');
username.value = "50";
/**11 Create an HTMLImageElement, assign src and alt, then log its
 * naturalWidth and naturalHeight after it has loaded.
 */
const myImg = document.createElement('img');
myImg.src = "https://cdn.barbora.lv/products/1b17818e-85ed-4202-9271-06034c0d1f57_m.png";
myImg.alt = "food";
if (myImg.complete) {
    console.log(`The image is ${myImg.naturalWidth} x ${myImg.naturalHeight}.`);
}
else {
    myImg.addEventListener("load", () => {
        console.log(`The image is ${myImg.naturalWidth} x ${myImg.naturalHeight}.`);
    });
}
class Macaw {
    type = "Macaw";
    speak() {
        console.log(`${this.type}!!!!`);
    }
}
const myParrot = new Macaw();
myParrot.speak();
//# sourceMappingURL=10Interface.js.map