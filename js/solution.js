"use strict";
(function () {
  const liEl = document.querySelectorAll("#ulId li");

  for (const li of liEl) {
    console.log(li.textContent);
  }
  const ul = document.getElementById("ulId");
  const ulAtr = Array.from(ul.attributes);
  const attributeValues = [];

  for (const attribute of ulAtr) {
    attributeValues.push(attribute.value);
  }
  console.log(attributeValues);

  const attributeNames = ulAtr.map((attribute) => attribute.name);
  console.log(attributeNames);

  const yourName = "Таня<3";
  const lastLi = liEl[liEl.length - 1];
  lastLi.textContent = `Привет меня зовут ${yourName}`;
  console.log(lastLi);

  const firstLi = liEl[0];
  firstLi.setAttribute("data-my-name", yourName);
  console.log(firstLi);

  ul.removeAttribute("data-dog-tail");
  console.log(ul);
})();
