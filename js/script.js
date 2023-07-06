"use strict";
(function () {
  const saveGrades = (student, marks) => {
    const marksMap = new WeakMap();
    marksMap.set(student, marks);
    console.log(marksMap.get(student));
  };

  const student = { name: "Иван Иванов" };
  const marks = { math: 90, fiz: 85, eng: 95 };

  saveGrades(student, marks);
})();
