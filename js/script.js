"use strict";
const potatoNeeded = function (liters) {
  const potatoForLiter = 4;
  const potatoWeight = 75;
  const potatoesToBuy = liters * potatoForLiter;
  const weightToBuy = (potatoesToBuy * potatoWeight) / 1000;
  const priceForKg = 13;
  return Math.round(weightToBuy * priceForKg);
};
console.log(potatoNeeded(48));
