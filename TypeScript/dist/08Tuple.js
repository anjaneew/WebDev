"use strict";
//--------------------------------Tuple---------------------------------------
// A tuple is a data type in TypeScript that is similar to an array but has a fixed
// number of elements, and you can specify the types of each element at specific 
// positions within the tuple.
Object.defineProperty(exports, "__esModule", { value: true });
//defining
let article = [1, "X-Men rocks", true];
let movie = [2, "Game of Thrones", true];
// Assigning a new tuple value 
movie = [2, "Fantastic Four sucks", false];
//new element - so error
//article.push("Game of Thrones");
console.log(article);
// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
//--------------------------------Exercises-----------------------------------
/**1 Define a readonly tuple named 'software' representing:
* version number (number)
* name (string)
* isOpenSource (boolean)
* Initialize it with values [4.2, "VSCode", true] */
let software = [4.2, "VSCode", true];
/**2 Define a mutable tuple named 'game' representing:
* id (number)
* title (string)
* hasMultiplayer (boolean)
* Initialize it with [101, "Chess", false] */
let game = [101, "Chess", false];
/**3 Reassign the 'game' tuple to new values:
* id: 102
* title: "Checkers"
* hasMultiplayer: true */
game = [102, "Checkers", true];
/**4 Attempt to push "Strategy" to the 'software' tuple.
* What happens when you run this? (Describe expected behavior) */
// software.push("Strategy"); - if uncommented this will be an error because the readonly 
/**5 Destructure the 'software' tuple into three separate variables:
* version
* appName
* sourceType
* Log these variables */
const [version, appName, sourceType] = software;
console.log(version);
console.log(appName);
console.log(sourceType);
//# sourceMappingURL=08Tuple.js.map