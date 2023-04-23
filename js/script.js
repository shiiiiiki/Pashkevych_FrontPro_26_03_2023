"use strict";
//Task 1
const arr11 = [1, 2, 3];
const arr12 = [4, 5, 6];
const arr13 = arr11.concat(arr12);
console.log(arr13);

//Task 2
const arr21 = [1, 2, 3];
arr21.reverse();
console.log(arr21);

//Task 3
const arr31 = [1, 2, 3];
arr31.push(4, 5, 6);
console.log(arr31);

//Task 4
const arr41 = [1, 2, 3];
arr41.unshift(4, 5, 6);
console.log(arr41);

//Task 5
const arr51 = ["js", "css", "jq"];
console.log(arr51[0]);

//Task 6
const arr61 = ["js", "css", "jq"];
console.log(arr61[arr61.length - 1]);

//Task 7
const arr71 = [1, 2, 3, 4, 5];
const arr72 = arr71.slice(0, 3);
console.log(arr72);

//Task 8
const arr81 = [1, 2, 3, 4, 5];
const arr82 = arr81.slice(3);
console.log(arr82);

//Task 9
const arr91 = [1, 2, 3, 4, 5];
arr91.splice(1, 2);
console.log(arr91);

//Task 10
const arr101 = [1, 2, 3, 4, 5];
const arr102 = arr101.slice(1, 4);
console.log(arr102);

//Task 11
const arr111 = [1, 2, 3, 4, 5];
arr111.splice(3, 0, "a", "b", "c");
console.log(arr111);

//Task 12
const arr121 = [1, 2, 3, 4, 5];
arr121.splice(1, 0, "a", "b");
arr121.splice(6, 0, "c");
arr121.push("e");
console.log(arr121);

//Task 13
const arr131 = [3, 4, 1, 2, 7];
arr131.sort();
console.log(arr131);

//Task 14
const arr141 = [5, 6, 7, 8, 9];
const arrSum = arr141.reduce((sum, elem) => sum + elem, 0);
console.log(arrSum);

//Task 15
const arr151 = [5, 6, 7, 8, 9];
const arrSq = arr151.map((elem) => elem ** 2);
console.log(arrSq);

//Task 16
const arr161 = [1, -3, 5, 6, -7, 8, 9, -11];
const arrNeg = arr161.filter((elem) => elem < 0);
console.log(arrNeg);

//Task 17
const arr171 = [1, -3, 5, 6, -7, 8, 9, -11];
const arrChet = arr171.filter((elem) => elem % 2 === 0);
console.log(arrChet);

//Task 18
const arr181 = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
const arr182 = arr181.filter((elem) => elem.length > 5);
console.log(arr182);

//Task 19
const arr191 = [1, 2, [3, 4], 5, [6, 7]];
const arr192 = arr191.filter((elem) => Array.isArray(elem));
console.log(arr192);

//Task 20
const arr201 = [5, -3, 6, -5, 0, -7, 8, 9];
const arrNegCount = arr201.filter((elem) => elem < 0).length;
console.log(arrNegCount);
