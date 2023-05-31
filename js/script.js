"use strict";
(function () {
  const formCheck = (type) => ["checkbox"].includes(type);
  const form = document.getElementById("form");
  const DATA_KEY = "DATA_KEY";
  const data = JSON.parse(localStorage.getItem(DATA_KEY));

  const retrieveFormValue = (e) => {
    e.preventDefault();
    const { elements } = form;
    const formData = {};

    for (let i = 0; i < elements.length; i++) {
      const formElement = elements[i];
      const { name } = formElement;

      if (name) {
        const { value, type, checked } = formElement;
        formData[name] = formCheck(type) ? checked : value;
      }
    }
    localStorage.setItem(DATA_KEY, JSON.stringify(formData));
  };

  form.addEventListener("submit", retrieveFormValue);

  const loadHandler = () => {
    if (!data) {
      return;
    }
    const inputs = Array.from(
      form.querySelectorAll("input, textarea, select, [type=file]")
    );

    inputs.forEach((input) => (input.value = data[input.name]));
  };
  document.addEventListener("DOMContentLoaded", loadHandler);
})();
