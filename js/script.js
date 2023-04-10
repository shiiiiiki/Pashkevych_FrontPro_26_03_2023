"use strict";

//1
const a1 = 0;
a1 === 0 ? console.log('Верно') : console.log('Неверно');

//2
const a2 = 1;
a2 > 0 ? console.log('Верно') : console.log('Неверно');

//3
const a3 = -5;
a3 < 0 ? console.log('Верно') : console.log('Неверно');

//4
const a4 = 2;
a4 >= 0 ? console.log('Верно') : console.log('Неверно');

//5
const a5 = -3;
a5 <= 0 ? console.log('Верно') : console.log('Неверно');

//6
const a6 = 7;
a6 !== 0 ? console.log('Верно') : console.log('Неверно');

//7
const a7 = 'test';
a7 === 'test' ? console.log('Верно') : console.log('Неверно');

//8
const a8 = '1';
a8 === '1' ? console.log('Верно') : console.log('Неверно');

//9
const a9 = 3;
a9 > 0 && a9 < 5 ? console.log('Верно') : console.log('Неверно');

//10
let a10 = 3;
a10 = a10 === 0 || a10 === 2 ? a10 + 7 : a10 / 10;
console.log(a10);

//11
let a11 = 1;
let b11 = 5;
let result11 = (a11 <= 1 && b11 >= 3) ? a11 + b11 : a11 - b11;
console.log(result11);

//12
const a12 = 10;
const b12 = 6;
(a12 > 2 && a12 < 11) || (b12 >= 6 && b12 < 14) ? console.log('Верно') : console.log('Неверно');

//13
const num = 1;
let result13;
switch(num) {
    case 1:
        result13 = 'зима';
        break;
    case 2:
        result13 = 'весна';
        break;
    case 3:
        result13 = 'лето';
        break;
    case 4:
        result13 = 'осень';
        break;
    default:
        result13 = 'неверное значение';
        break;
}
console.log(result13);