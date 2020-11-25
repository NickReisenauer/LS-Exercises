const substrings = (str) => {
  let result = [];
  str
    .split("")
    .map((el, idx) => leadingSubstrings(str.slice(idx)))
    .forEach((el) => el.forEach((el) => result.push(el)));
  return result;
};

const leadingSubstrings = (str) =>
  str.split("").map((el, idx) => str.slice(0, idx + 1));
