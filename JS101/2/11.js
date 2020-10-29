const integerToString = (num) => {
  let result = "";
  for (let i = 0; num > 0; i += 1) {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    result += remainder;
  }
  return result.split("").reverse().join("");
};
integerToString(1234567890);
