"use strict";

(function () {
  const form = document.querySelector("#todoForm");
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

    const dataToSave = JSON.parse(JSON.stringify(data));
    dataToSave.id = currentID;
    existingData.push(dataToSave);

    try {
      localStorage.setItem(DATA_KEY, JSON.stringify(existingData));
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }

    const savedItem = getDatabyID(currentID);
    currentID += 1;

    return savedItem;
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
    renderData(dataToSave.title, dataToSave.description);
  });

  const renderData = (titleText = "", descriptionText = "") => {
    const template = createTemplate(titleText, descriptionText);
    document.querySelector("#todoItems").prepend(template);
  };

  const createTemplate = (titleText = "", descriptionText = "") => {
    const mainWrap = document.createElement("div");
    mainWrap.className = "col-4";

    const wrap = document.createElement("div");
    wrap.className = "taskWrapper";
    mainWrap.append(wrap);

    const title = document.createElement("div");
    title.innerHTML = titleText;
    title.className = "taskHeading";
    wrap.append(title);

    const description = document.createElement("div");
    description.innerHTML = descriptionText;
    description.className = "taskDescription";
    wrap.append(description);

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove Task!";
    removeButton.className = "btn btn-danger";
    wrap.append(removeButton);

    return mainWrap;
  };

  window.addEventListener("load", () => {
    const savedData = getData();
    if (savedData.length > 0) {
      savedData.forEach((item) => renderData(item.title, item.description));
    }
  });
})();
