const readline = require("readline-sync");

console.log("What is your age?");
let age = Number(readline.question());

console.log("What age would you like to retire at?");
let retireAge = Number(readline.question());

let workLeft = retireAge - age;
let year = new Date().getFullYear();

console.log(`It's ${year}. You will retire in ${year + workLeft}`);
console.log(`You only have ${workLeft} years of work to go!`);
