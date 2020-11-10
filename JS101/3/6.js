const readline = require("readline-sync");

console.log("Input a noun:");
let noun = readline.question();

console.log("Input a verb:");
let verb = readline.question();

console.log("Input an adverb:");
let adverb = readline.question();

console.log("Input an adjective:");
let adjective = readline.question();

console.log(`
Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.
`);
