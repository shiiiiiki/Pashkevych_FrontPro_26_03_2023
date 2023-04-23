"use strict";
//Task 4
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

//Task 5
let sumSq = 0;
for (let i = 0; i < arr.length; i++) {
  sumSq += Math.pow(arr[i], 2);
}
console.log(sumSq);
