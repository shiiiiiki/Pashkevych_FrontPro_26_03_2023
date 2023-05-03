"use strict";
//Task 1
const getFactorial = function (n) {
  if (n !== 1) {
    return n * getFactorial(n - 1);
  } else {
    return 1;
  }
};
alert(getFactorial(3));

//Task 2
const getDegree = function (num, deg) {
  if (deg === 1) {
    return num;
  } else {
    return num * getDegree(num, deg - 1);
  }
};
alert(getDegree(2, 3));

//Task 3
const getSum = function (a, b) {
  if (b === 0) {
    return a;
  } else {
    return getSum(a + 1, b - 1);
  }
};
alert(getSum(2, 8));
alert(getSum(0, 9));
