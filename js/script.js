"use strict";
const fib = function (n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const n1 = result[i - 1];
    const n2 = result[i - 2];
    result.push(n1 + n2);
  }
  return result[n];
};
console.log(fib(9));
