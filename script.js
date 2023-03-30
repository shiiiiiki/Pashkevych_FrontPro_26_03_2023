"use strict";

// Task 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2
const userNew = {
    name: "John"
};
// это будет работать?
userNew.name = "Pete";
alert(userNew.name);
/*
это будет работать, так как значение польвозателя будет константой,
и оно всегда будет ссылаться на один и тот же объект,
свойства которого могут изменяться, как и получилось в данном примере.*/

// Task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);