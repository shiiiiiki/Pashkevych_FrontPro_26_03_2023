"use strict";
const numPalindrom = function (num, step = 0) {
  const reverseNum = Number(String(num).split("").reverse().join(""));
  const sum = num + reverseNum;
  if (sum === Number(String(sum).split("").reverse().join(""))) {
    return { result: sum, step };
  } else {
    return numPalindrom(sum, step + 1);
  }
};
const result = numPalindrom(96);
console.log(result);
