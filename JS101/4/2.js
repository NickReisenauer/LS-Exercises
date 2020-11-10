const readline = require("readline-sync");
const numbers = [];

console.log("Enter the 1st number:");
numbers.push(Number(readline.question()));

console.log("Enter the 2nd number:");
numbers.push(Number(readline.question()));

console.log("Enter the 3rd number:");
numbers.push(Number(readline.question()));

console.log("Enter the 4th number:");
numbers.push(Number(readline.question()));

console.log("Enter the 5th number:");
numbers.push(Number(readline.question()));

console.log("Enter the last number:");
let sixth = Number(readline.question());

if (numbers.includes(sixth)) {
  console.log(`The number ${sixth} appears in ${numbers.join(",")}`);
} else {
  console.log(`The number ${sixth} does not appear in ${numbers.join(",")}`);
}
