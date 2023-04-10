"use strict";

//Task 1
let numOrStr = prompt('Input number or string');
console.log(numOrStr);
if (numOrStr === null || numOrStr.trim() === '' || isNaN(+numOrStr) ) {
    console.log('вы отменили или ввели пустую строку или ввели не число');
} else {
    console.log('OK!');
}

//Task 2
let numOrString = prompt('input number or string');
console.log(numOrString);

switch(numOrString) {
    case null:
        console.log('вы отменили');
        break;
    case '':
        console.log('Empty String');
        break;
    default:
    if (isNaN(+numOrString)) {
        console.log('number is Ba_NaN');
    } else {
        console.log('OK!');
    }
}
