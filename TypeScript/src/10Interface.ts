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
        console.log(`${name} says ${message}!!`);
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
//because TS is a compiler language than JS, it is not able to see what type of element 
//we select from DOM. So we have to specify. As a plus point, when we do select that
//TS gives us additional properties Ex: HTMLSelectElement > autocomplete, disable


//                                                    THIS PART NEW
const input = document.querySelector('.form-control') as HTMLInputElement; 

input.value // now we can work with it

//Other examples HTMLElement, HTMLDivElement, HTMLAnchorElement, HTMLImageElement

//ex: HTMLImageElement has
//      Properties: alt, heigth, src, width
//      Methods: complete, decode(): Promise<void>, nathuralHeight, naturalWidth


const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";

if(imgElement.complete){
    console.log(`Image dimentions: ${imgElement.naturalWidth} x ${imgElement.naturalHeight}`);
}

else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimentions: ${imgElement.naturalWidth} x ${imgElement.naturalHeight}`);
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
    type: "dog"; //error cz it expects type: string = "dog"; insted
    bark(){
        console.log("Baw Baw Baw!!!");
    }
}