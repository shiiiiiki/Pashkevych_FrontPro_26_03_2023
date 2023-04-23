"use strict";
const num = parseInt(prompt("Enter your number"));
let isSimple = true;
if (num <= 1) {
  isSimple = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isSimple = false;
      break;
    }
  }
}
console.log(isSimple);
