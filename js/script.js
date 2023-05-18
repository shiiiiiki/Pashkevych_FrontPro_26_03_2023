"use strict";
const randomNumber = () => {
  const arr = [];
  const number = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(num) !== -1) {
      return number();
    } else {
      arr.push(num);
      return num;
    }
  };
  return number;
};
const getNum = randomNumber();
console.log(getNum());
console.log(getNum());
console.log(getNum());
