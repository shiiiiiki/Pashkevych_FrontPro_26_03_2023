"use strict";
// Реализация через цикл
(function () {
  const formCheck = (type) => ["checkbox"].includes(type);
  const form = document.getElementById("form");
  const retrieveFormValue = (e) => {
    e.preventDefault();
    const { elements } = form;
    const values = {};

    for (let i = 0; i < elements.length; i++) {
      const formElement = elements[i];
      const { name } = formElement;

      if (name) {
        const { value, type, checked } = formElement;
        values[name] = formCheck(type) ? checked : value;
      }
    }
    console.log(values);
  };
  form.addEventListener("submit", retrieveFormValue);
})();

// Реализация через FormData
(function () {
  const { form } = document.forms;
  const retrieveFormValue = (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    console.log(values);
  };
  form.addEventListener("submit", retrieveFormValue);
})();
