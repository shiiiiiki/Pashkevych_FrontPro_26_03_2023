"use strict";
// 1
(() => {
  function* setIterator(array) {
    for (let i = 0; i < array.length; i++) {
      yield i;
    }
  }

  const arr = [1, 2, 3];
  const iterator1 = setIterator(arr);
  console.log(iterator1.next());
  console.log(iterator1.next());
  console.log(iterator1.next());
  console.log(iterator1.next());
})();

// 2
const iter = function () {
  let lengthItem = this.length;
  let firstItem = null;
  let resultObj = {};
  if (lengthItem > 0) {
    firstItem = this.shift();
    resultObj.value = firstItem;
    resultObj.done = false;
  } else {
    resultObj.value = undefined;
    resultObj.done = true;
  }
  console.log(resultObj);
};

const arr = [1, 2, 3];
Array.prototype.iterator2 = iter;
arr.iterator2();
arr.iterator2();
arr.iterator2();
arr.iterator2();
