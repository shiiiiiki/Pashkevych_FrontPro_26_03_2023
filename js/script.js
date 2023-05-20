"use strict";
const counter = (number = 0) => {
  let count = number;
  let increaseCount = 0;
  let decreaseCount = 0;
  let valueCount = 0;

  return {
    increase() {
      count++;
      increaseCount++;
    },
    decrease() {
      count--;
      decreaseCount++;
    },
    value() {
      valueCount++;
      return count;
    },
    getStatistic() {
      return {
        increaseCount,
        decreaseCount,
        valueCount,
      };
    },
    reset() {
      count = 0;
      increaseCount = 0;
      decreaseCount = 0;
      valueCount = 0;
    },
  };
};
