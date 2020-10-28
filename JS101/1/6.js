const readlineSync = require("readline-sync");

const mathFunc = (operation, num) => {
  let result = 0;
  if (operation === "s") {
    for (let i = 1; i <= num; i += 1) {
      result += i;
    }
    return console.log(
      `The sum of the integers between 1 and ${num} is ${result}`
    );
  }
  result += 1;
  for (let i = 1; i <= num; i += 1) {
    result *= i;
  }
  return console.log(
    `The product of the integers between 1 and ${num} is ${result}`
  );
};

console.log("Please enter an integer greater than 0:");
const num = parseInt(readlineSync.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product:');
const operation = readlineSync.prompt();

mathFunc(operation, num);
