"use strict";
(function () {
  const sum = (goods) => {
    const priceMap = new Map();
    goods.forEach(([item, price]) => {
      priceMap.set(item, price);
    });

    const totalPrice = Array.from(priceMap.values()).reduce((acc, price) => acc + price, 0);
    return totalPrice;
  };

  const goods = [
    ["футболка", 15],
    ["шорты", 25],
    ["носки", 5],
  ];
  console.log(sum(goods));
})();
