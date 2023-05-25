"use strict";
(function () {
  function createTable() {
    const table = document.createElement("table");

    let num = 1;
    for (let i = 0; i < 10; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("td");
        cell.textContent = num;
        row.appendChild(cell);
        num++;
      }
      table.appendChild(row);
    }
    return table;
  }

  const createdTable = createTable();
  document.body.append(createdTable);
})();
