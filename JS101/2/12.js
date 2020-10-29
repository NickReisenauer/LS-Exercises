const integerToString = (num) => {
  let result = "";
  for (let i = 0; num > 0; i += 1) {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    result += remainder;
  }
  return result.split("").reverse().join("");
};

const signedIntegerToString = (num) => {
  if (Math.sign(num) === 1) return `+${integerToString(num)}`;
  else if (Math.sign(num) === -1) return `-${integerToString(-num)}`;
  else if (num === 0) return "0";
  return integerToString(num);
};
