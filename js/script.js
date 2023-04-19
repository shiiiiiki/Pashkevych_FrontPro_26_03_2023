"use strict";

function mainFunction(callback) {
  const num1 = Number(prompt("Enter first number"));
  const num2 = Number(prompt("Enter second number"));
  callback(num1, num2);
}

function exponentiation(num1, num2) {
  const result = Math.pow(num1, num2);
  alert("Result of exponentiation is " + result);
}

mainFunction(exponentiation);

function multiplay(num1, num2) {
  const resultMult = num1 * num2;
  alert("Result of multiplication is " + resultMult);
}

mainFunction(multiplay);

function division(num1, num2) {
  const resultDiv = num1 / num2;
  alert("Result of division is " + resultDiv);
}

mainFunction(division);

function modulo(num1, num2) {
  const resultDiv = num1 % num2;
  alert("Result of modulo is " + resultDiv);
}

mainFunction(modulo);
