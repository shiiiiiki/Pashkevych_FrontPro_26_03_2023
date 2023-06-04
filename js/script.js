"use strict";

const insertWordInto = (string) => {
  let index = 0;
  return function (word) {
    const arr = string.split(" ");
    if (index > arr.length) {
      index = 0;
    }
    arr.splice(index, 0, word);
    index += 1;
    const newString = arr.join(" ");
    return newString;
  };
};

const insert = insertWordInto("hello world");
const result = insert("Odesa"); // -> 'hello Odesa world'
console.log(result);
const secondResult = insert("Odesa"); // -> 'Odesa hello world'
console.log(secondResult);
const thirdResult = insert("Odesa"); // -> 'hello world Odesa'
console.log(thirdResult);
const fourthResult = insert("Odesa");
console.log(fourthResult);
