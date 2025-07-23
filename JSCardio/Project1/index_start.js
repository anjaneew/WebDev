// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'



function reverseString(str) {

  // -----------------------------------------------------------/
  //answer 1
  // return str.split("").reverse().join("");

  // -----------------------------------------------------------/
  //answer 2
  // let reversed = "";

  // for (let i = str.length -1 ; i >= 0; i--){
  //   reversed += str[i];
  // }

  // return reversed;

  // -----------------------------------------------------------/
  // //solutions - modern ES6
  // let revString = '';

  // for(let char of str){
  //   revString = char + revString;
  // }

  // return revString;

  // -----------------------------------------------------------/
  //solutions - modern ES6
  // let revString = '';

  // str.split('').forEach(char=> revString = char + revString);

  // return revString; 

  // -----------------------------------------------------------/
  //solutions - Best - High Order Array method

  let revString = '';

  str.reduce((char)=>{

    
    revString = 
  });


}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

  const reversed = str.split("").reverse().join("");

  return str === reversed; 

}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {

  str = `${int}`;
  const reversed = str.split("").reverse().join("");

  return Number(reversed);

}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

  let wordsArray = str.split(" ");
  console.log(wordsArray);

  let capitalizedArray = [];

  for(let i = 0; i < wordsArray.length; i++){
    let capitalized = `${wordsArray[i].slice(0,1).toUpperCase()}${wordsArray[i].slice(1)}`; 

    capitalizedArray.push(capitalized);
  }

  console.log(capitalizedArray);
  return capitalizedArray.join(" ");
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}



// // Call Function
const output = reverseString('hello');

console.log(output);


console.log(isPalindrome('racecar'));

console.log(reverseInt(521));

console.log(capitalizeLetters('i love javascript'));

