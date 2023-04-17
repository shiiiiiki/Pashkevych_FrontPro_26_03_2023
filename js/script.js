"use strict";
const padString = function (str, numLen, symb = " ", side = false) {
  if (!str || typeof str !== "string") {
    return "Some error. The argument must be a String!";
  }
  if (!numLen || typeof numLen !== "number") {
    return "Some error. The argument must be a Number!";
  }
  if (!symb || typeof symb !== "string" || symb.length !== 1) {
    return "Some error. The argument must be a String in one Symbol!";
  }
  if (!side || typeof side !== "boolean") {
    return "Some error. The argument must be a Boolean!";
  }
  if (numLen < str.length) {
    return str.substr(0, numLen);
  }
  const padStr = symb.repeat(numLen - str.length);
  return side ? padStr + str : str + padStr;
};
console.log(padString("hello", 8, "*"));
console.log(padString("hello", 6, "*", true));
console.log(padString("hello", 2));
