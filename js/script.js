"use strict";

function Student(name, surname, bYear) {
  this.name = name;
  this.surname = surname;
  this.yearOfBirth = bYear;
  this.studentAttendance = [];
  this.studentMark = [];

  Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.yearOfBirth;
    console.log(age);
  };

  Student.prototype.mark = function (currentMark) {
    this.studentMark.unshift(currentMark);
    this.studentMark = this.studentMark.slice(0, 10);
    return this.studentMark;
  };

  Student.prototype.present = function () {
    this.studentAttendance.unshift(true);
    this.studentAttendance = this.studentAttendance.slice(0, 10);
    return this.studentAttendance;
  };

  Student.prototype.absent = function () {
    this.studentAttendance.unshift(false);
    this.studentAttendance = this.studentAttendance.slice(0, 10);
    return this.studentAttendance;
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
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.mark(10);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();

console.log(student1);

console.log(student1.summary());
