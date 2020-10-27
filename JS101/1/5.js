const readlineSync = require("readline-sync");

console.log("What is the amount of the bill?");
const bill = readlineSync.prompt();

console.log("What is the tip percentage?");
const tip = readlineSync.prompt();

const calculatedTip = ((tip / 100) * bill).toFixed(2);

console.log(`The tip is $${calculatedTip}`);
console.log(
  `The total plus tip is $${(Number(bill) + Number(calculatedTip)).toFixed(2)}`
);
