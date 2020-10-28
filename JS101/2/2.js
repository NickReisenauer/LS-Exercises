const readlineSync = require("readline-sync");

const greet = (name) => {
  if (name.length < 1 && name.indexOf("!") === 0)
    return "Please input a real name";

  if (name.indexOf("!") === name.length - 1)
    return `HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`;

  return `Hello ${name}.`;
};

console.log("What is your name?");
const name = readlineSync.prompt();
greet(name);
