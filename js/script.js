"use strict";
//Task 1
const x = 10,
  y = 7;
x > y ? console.log("x больше, чем y") : console.log("x не больше, чем y");

//Task 2
const num = prompt("Enter your number");
if (num % 2 === 0) {
  alert("Число " + num + " четное");
} else {
  alert("Число " + num + " нечетное");
}

//Task 3
const numb = prompt("Enter your integer number");
const sign = numb >= 0 ? "положительное" : "отрицательное";
const length = numb.length;
alert("Число " + numb + " " + length + "-значное " + sign);

//Task 4
const num1 = prompt("Enter your first number");
const num2 = prompt("Enter your second number");
const num3 = prompt("Enter your third number");
if (num1 >= num2 && num1 >= num3) {
  alert("Наибольшее число: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
  alert("Наибольшее число: " + num2);
} else {
  alert("Наибольшее число: " + num3);
}

//Task 5
const len1 = prompt("Enter the length of the first side");
const len2 = prompt("Enter the length of the second side");
const len3 = prompt("Enter the length of the third side");
if (len1 + len2 > len3 && len2 + len3 > len1 && len1 + len3 > len2) {
  alert("A triangle with these sides exists");
} else {
  alert("A triangle with such sides does not exist");
}
