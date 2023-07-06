"use strict";
(function () {
  const levelSet = new WeakSet();
  const addPlayerToLevelSet = (player) => {
    levelSet.add(player);
  };

  const player1 = { id: 1, name: "Иван", level: 10 };
  addPlayerToLevelSet(player1);
  console.log(levelSet.has(player1));
})();
