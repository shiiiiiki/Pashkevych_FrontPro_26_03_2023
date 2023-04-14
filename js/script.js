"use strict";
const num1 = 5;
const num2 = 8;
const sum = function (num1, num2) {
  return num1 + num2;
};
const subt = function (num1, num2) {
  return num1 - num2;
};
const mult = function (num1, num2) {
  return num1 * num2;
};
const resultsum = sum(num1, num2);
const resultsubt = subt(num1, num2);
const resultmult = mult(num1, num2);
console.log(resultsum, resultmult, resultsubt);
