"use strict";
const array = [1, 2, [1.1, 1.2, [2.1, 2.2, 2.3], 1.3], 3];

const generateList = (array) => {
  return `<ul>${array.reduce((str, el) => {
    str += `<li>${Array.isArray(el) ? generateList(el) : el}</li>`;
    return str;
  }, "")}</ul>`;
};

const generatedList = generateList(array);
document.body.innerHTML = generatedList;
