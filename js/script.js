"use strict";
const num = prompt("Enter your number");
if (num < 1) {
  console.log("NaN");
} else {
  let i = 2;
  while (i <= num) {
    if (num % i === 0) {
      console.log(i);
      break;
    }
    i++;
  }
}
