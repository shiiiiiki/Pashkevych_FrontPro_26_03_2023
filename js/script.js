"use strict";
(function () {
  const uniqSymbolsCount = (string) => {
    const uniqueSymbols = new Set();
    for (const element of string) {
      uniqueSymbols.add(element);
    }
    return uniqueSymbols.size;
  };

  const newString = "abracadabra";
  console.log(uniqSymbolsCount(newString));
})();
