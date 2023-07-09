"use strict";
(function () {
  const printGreetings = (students) => {
    students.forEach(({ name, subject }) => {
      console.log(`Привет, ${name}! Ты изучаешь предмет ${subject}`);
    });
  };

  const students = [
    { name: "John", age: 20, subject: "Math" },
    { name: "Alice", age: 22, subject: "English" },
    { name: "Bob", age: 21, subject: "History" },
    { name: "Angela", age: 30, subject: "Literature" },
  ];

  printGreetings(students);
})();
