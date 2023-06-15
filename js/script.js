"use strict";

(function () {
  const form = document.querySelector("#todoForm");
  const container = document.querySelector("#todoItems");
  const DATA_KEY = "to-do-items";
  let currentID = 1;

  const getData = () => {
    return JSON.parse(localStorage.getItem(DATA_KEY)) || [];
  };

  const getDatabyID = (id) => {
    const data = getData();
    if (!data.length) {
      return;
    }
    return data.find((item) => item.id === id);
  };

  const postData = (data) => {
    const existingData = getData();

    const dataToSave = structuredClone(data);
    dataToSave.id = currentID;
    existingData.push(dataToSave);

    try {
      localStorage.setItem(DATA_KEY, JSON.stringify(existingData));
    } catch (error) {
      console.dir(error);
      throw new Error(error);
    }

    const savedItem = getDatabyID(currentID);
    currentID += 1;

    return savedItem;
  };

  const deleteData = (id) => {
    let data = getData();
    if (!data.length) {
      return;
    }
    data = data.filter((item) => item.id !== id);

    try {
      localStorage.setItem(DATA_KEY, JSON.stringify(data));
    } catch (error) {
      throw new Error(error);
    }

    return !getData().find((item) => item.id === id);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = Array.from(form.querySelectorAll("input, textarea")).reduce(
      (savedData, input) => {
        savedData[input.name] = input.value;
        return savedData;
      },
      {}
    );
    const dataToSave = postData(data);
    const itemToRender = createTemplate(dataToSave);
    renderItem(itemToRender);
  });

  const createTemplate = ({ title, description, id, completed }) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("col-4");
    wrapper.setAttribute("data-id", id);

    let wrapInnerContent = '<div class="taskWrapper">';
    wrapInnerContent += `<div class="taskHeading">${title}</div>`;
    wrapInnerContent += `<div class="taskDescription">${description}</div>`;
    wrapInnerContent += "<hr>";
    wrapInnerContent += '<label class="completed form-check">';
    wrapInnerContent += `<input data-item-id="${id}" type="checkbox" class="form-check-input" >`;
    wrapInnerContent += "<span>Complited?</span>";
    wrapInnerContent += "</label>";
    wrapInnerContent += "<hr>";
    wrapInnerContent += `<button class="btn btn-danger" data-remove-btn data-item-id="${id}">Remove Task!</button>`;
    wrapInnerContent += "</div>";

    wrapper.innerHTML = wrapInnerContent;

    wrapper.querySelector("input[type=checkbox]").checked = completed;

    return wrapper;
  };

  const renderItem = (DOMel) => {
    if (!(DOMel instanceof HTMLElement)) {
      throw new Error("Valid DOM Element needed");
    }
    container.prepend(DOMel);
  };

  container.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!e.target.hasAttribute("data-remove-btn")) {
      return;
    }
    const todoItem = e.target.closest("[data-id]");
    const id = Number(todoItem.getAttribute("data-id"));
    if (deleteData(id)) {
      todoItem.remove();
    }
  });

  const removeAllData = document.querySelector(".remove-all");
  removeAllData.addEventListener("click", (e) => {
    e.stopPropagation();

    localStorage.removeItem(DATA_KEY);
  });

  const preRenderTodos = () => {
    document.removeEventListener("DOMContentLoaded", preRenderTodos);
    const data = getData();
    if (!data.length) {
      return;
    }
    currentID = data.at(-1).id;
    data.forEach((item) => renderItem(createTemplate(item)));
  };

  document.addEventListener("DOMContentLoaded", preRenderTodos);
})();
