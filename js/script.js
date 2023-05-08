"use strict";
const calculator = {
  num1: 0,
  num2: 0,
  read: function () {
    this.num1 = Number(prompt("Enter first number"));
    this.num2 = Number(prompt("Enter second number"));

    if (isNaN(this.num1) || isNaN(this.num2)) {
      alert("One or both of the inputs are not numbers");
      this.read();
    }
  },
  sum: function () {
    return this.num1 + this.num2;
  },
  mul: function () {
    return this.num1 * this.num2;
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
