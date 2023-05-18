"use strict";
const getNum = () => {
  let result = 0;
  return function (num) {
    return (result += num);
  };
};
const sum = getNum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
