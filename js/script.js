"use strict";
const arr = [[1, 2], [3, 4], [[5, 6]], [[[4, 0]]]];

const flat = (arr, ...rest) => {
  if (rest.length > 0) {
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided"
    );
  }

  const result = [];
  const flatten = (arr) => {
    arr.forEach((item) => {
      Array.isArray(item) ? flatten(item) : result.push(item);
    });
  };

  flatten(arr);
  return result;
};

console.log(flat(arr));
