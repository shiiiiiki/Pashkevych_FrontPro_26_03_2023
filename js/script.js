"use strict";
(function () {
  function Student(name, surname, bYear, lesCounter = 10) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = bYear;
    this.studentAttendance = new Array(lesCounter);
    this.studentMark = new Array(lesCounter);
    this.lesCounter = lesCounter;
    this.currentLes = 1;

    Student.prototype.getAge = function () {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.yearOfBirth;
      console.log(age);
    };

    Student.prototype.setAttendance = function (attended, nextLes = true) {
      if (this.lesCounter === this.currentLes) {
        return;
      }
      this.studentAttendance[this.currentLes - 1] = attended;
      nextLes ? (this.currentLes += 1) : null;
    };

    Student.prototype.mark = function (currentMark) {
      if (!this.validMark(currentMark)) {
        return;
      }
      this.studentMark[this.currentLes - 1] = currentMark;
    };

    Student.prototype.validMark = function (currentMark) {
      if (currentMark >= 0 && currentMark <= 10) {
        return true;
      }
      console.warn("Not valid mark");
      return false;
    };

    Student.prototype.present = function (currentMark = null) {
      if (currentMark !== null && !this.validMark(currentMark)) {
        return;
      }
      this.setAttendance(true, currentMark === null);

      if (currentMark !== null) {
        this.mark(currentMark);
        this.currentLes += 1;
      }
    };

    Student.prototype.absent = function () {
      this.setAttendance(false);
    };

    Student.prototype.countAverage = function (array) {
      const cutArray = array.slice(0, 10);
      const sum = cutArray.reduce((acc, value) => acc + value, 0);
      const average = cutArray.length > 0 ? sum / cutArray.length : 0;
      return average;
    };

    Student.prototype.summary = function () {
      const averageMark = this.countAverage(this.studentMark);
      const averageAttendance = this.countAverage(this.studentAttendance);

      if (averageMark > 9 && averageAttendance > 0.9) {
        return "Ути какой молодчинка!";
      } else if (averageMark < 9 || averageAttendance < 0.9) {
        return "Норм, но можно лучше";
      } else {
        return "Редиска!";
      }
    };
  }

  let student1 = new Student("Andrew", "Andreevich", 1998);
  student1.getAge();
  student1.present(2);
  student1.present(2);
  student1.absent();
  student1.absent();

  console.log(student1);

  console.log(student1.summary());
})();
