"use strict";
const ulEl = document.getElementById("ulId");
const liEl = ulEl.getElementsByTagName("li");

for (const li of liEl) {
  console.log(li.innerText);
}

console.log("Общее кол-во элементов:", liEl.length);

const textArr = [];
for (const li of liEl) {
  textArr.push(li.innerText);
}
console.log(textArr);
