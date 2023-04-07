"use strict";
//Task 1
Boolean(Number('10')) + 1; //2
'sub' + Number(false); //sub0
16  *  '      91    '; //1456
true-70; //-69
Number(1 + String(1)) + 1; //12

//Task 2
const hour = Number( prompt( 'Введи количество часов'));
const sec = ( hour * 3600 );
alert('Количество секунд в ' + hour + ' час. = ' + sec);

// Task 3
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num = num++;
num = num--;
console.log(num);