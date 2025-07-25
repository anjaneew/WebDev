
//------------reverse()-------
function reverseString1(str){

    return str.split("").reverse().join("");

}


function reverseString2(str){

    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }

    return reversed;
}


//solutions - modern ES6
function reverseString3(str){

    let reversed = '';

    for(let char of str){
        reversed = char + reversed;
    }

    return reversed;
    
}

//solutions - modern ES6
function reverseString4(str){
    let reversed = '';

    // str.split('').forEach((char)=>{
    //     reversed = char + reversed;
    // });

    str.split('').forEach(char => reversed = char + reversed);

    return reversed; 

}

 //solutions - Best - High Order Array method
function reverseString5(str){
    

}



console.log("Pattern 1:" + reverseString1("hello"));
console.log('str.split("").reverse().join("");');
console.log("\n");

console.log("Pattern 2: " + reverseString2("hello"));
console.log('for(let i = str.length - 1; i >= 0; i--){');
console.log('    reversed += str[i];}');
console.log("\n");

console.log("Pattern 3: \n" + reverseString3("hello"));
console.log("for(let letter of str){");
console.log("    reversed = letter + reversed;}");
console.log("\n");

console.log("Pattern 4: \n" + reverseString4("hello"));
console.log("str.split('').forEach((char)=>{");
console.log("               reversed = char + reversed;});");
console.log("str.split('').forEach(char => reversed = char + reversed);");
console.log("\n");


console.log("Pattern : \n" + reverseString("hello"));
console.log("");
console.log("");
console.log("\n");


console.log("Pattern : \n" + reverseString("hello"));
console.log("");
console.log("");
console.log("\n");
