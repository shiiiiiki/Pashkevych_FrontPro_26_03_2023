"use strict";
const mathOperation = prompt("Выбери необходимое действие: ' + ', ' - ', ' * ', ' / ' ", );
const num1 = Number(prompt("Введи первое число"));
const num2 = Number(prompt("Введи второе число"));
let result;
if (mathOperation === "+") {
    result = num1 + num2;
} else if (mathOperation === "-") {
    result = num1 - num2;
} else if (mathOperation === "*") {
    result = num1 * num2;
} else if (mathOperation === "/") {
    result = num1 / num2;
}
if (result !== undefined) {
    alert( 'Результат: ' + num1 + mathOperation + num2 + ' = ' + result );
}