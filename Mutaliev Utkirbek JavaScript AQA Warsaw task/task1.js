var readline = require('readline-sync');


// Point 1
let number = parseInt(readline.question("Enter a number:"));

if (number > 7) {
    console.log("Hello");
}

//  Point 2
let name = readline.question("Enter a name:");

if (name === "John") {
    console.log("Hello, John");
} else {
    console.log("There is no such name");
}

// Point 3
let numericArray = readline.question("Enter a numeric array separated by spaces:");
numericArray =  parseNumericArray(numericArray);


let multiplesOf3 = numericArray.filter(num => num % 3 === 0);
console.log("Array elements that are multiples of 3:", multiplesOf3);


function parseNumericArray(input) {
    const arrayContent = input.match(/\[(.*)\]/)[1];
    return arrayContent.split(' ').map(Number);
}