"use strict";
const num = prompt("Enter your number");
const deg = prompt("Enter your degree");
const result = function (num, deg){
    if ((isNaN(num)) || (isNaN(deg))){
        return "Some error";
    }
    return Math.pow(num, deg);
}
alert(result(num, deg));