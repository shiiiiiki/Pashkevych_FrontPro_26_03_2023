"use strict";
const arr = [1, 2, 3, -1, -2, -3];
const positNum = function (arr) {
  const exampleArr = [];
  if (arr.length === 0) {
    console.log("Array is empty");
  }
  for (let i = 0; i < arr.length; i++) {
    const currentPositiveNumber = arr[i];
    if (currentPositiveNumber > 0) {
      exampleArr.push(currentPositiveNumber);
    }
  }
  if (exampleArr.length === 0) {
    return null;
  }
  return exampleArr;
};

console.log(positNum(arr));
