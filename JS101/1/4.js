const readlineSync = require("readline-sync");
const RATE = 10.7639;

const areaFinder = (type) => {
  console.log(`Enter the length of the room in ${type}: `);
  const length = Number(readlineSync.prompt());

  console.log(`Enter the width of the room in ${type}: `);
  const width = Number(readlineSync.prompt());

  const area = width * length;
  let squareX;

  type === "meters" ? (squareX = area * RATE) : (squareX = area / RATE);

  console.log(
    `The area of the room is ${area} square ${type} (${squareX.toFixed(
      2
    )} square ${type === "meters" ? "feet" : "meters"}).`
  );
};

console.log("Type of input (M: meters) (F: feet)");
const input = readlineSync.prompt();
input.toLowerCase() === "m" ? areaFinder("meters") : areaFinder("feet");
