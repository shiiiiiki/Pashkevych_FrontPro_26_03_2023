"use strict";
// Task 1
const arr1 = ["a", "b", "c", "d"];
const str1 = arr1[0] + "+" + arr1[1] + ", " + arr1[2] + "+" + arr1[3];
console.log(str1);

// Task 2
const arr2 = [2, 5, 3, 9];
const result2 = arr2[0] * arr2[1] + arr2[2] * arr2[3];
console.log(result2);

// Task 3
const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr3[1][0]);

// Task 4
const obj4 = { js: ["jQuery", "Angular"], php: "hello", css: "world" };
console.log(obj4.js[0]);

// Task 5
const arr5 = [];
for (let i = 1; i <= 5; i++) {
  arr5.push("x".repeat(i));
}
console.log(arr5);

// Task 6
const arr6 = [];
for (let i = 1; i <= 5; i++) {
  arr6.push(String(i).repeat(i));
}
console.log(arr6);

// Task 7
function arrayFill(value, length) {
  const arr7 = [];
  for (let i = 0; i < length; i++) {
    arr7.push(value);
  }
  return arr7;
}
console.log(arrayFill("x", 5));

// Task 8
const arr8 = [1, 2, 3, 4, 5];
let sum8 = 0;
let count = 0;
for (let i = 0; i < arr8.length; i++) {
  sum8 += arr8[i];
  count++;
  if (sum8 > 10) {
    break;
  }
}
console.log(count);

// Task 9
const arr9 = [1, 2, 3, 4, 5];
const reversedArr = [];
for (let i = arr9.length - 1; i >= 0; i--) {
  reversedArr.push(arr9[i]);
}
console.log(reversedArr);

// Task 10
const arr10 = [[1, 2, 3], [4, 5], [6]];
let sum10 = 0;
for (let i = 0; i < arr10.length; i++) {
  for (let j = 0; j < arr10[i].length; j++) {
    sum10 += arr10[i][j];
  }
}
console.log(sum10);

// Task 11
const arr11 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let sum11 = 0;
for (let i = 0; i < arr11.length; i++) {
  for (let j = 0; j < arr11[i].length; j++) {
    for (let k = 0; k < arr11[i][j].length; k++) {
      sum11 += arr11[i][j][k];
    }
  }
}
console.log(sum11);
