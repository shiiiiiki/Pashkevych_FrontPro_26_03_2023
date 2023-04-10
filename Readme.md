### Задание 1
* Скомбинировать инструкции if которые проверяю данные введенные пользователем в 1 одну инструкцию (объединить проверки с помощью логических операторов), получается что вместо 3 if..else..if у вас должен быть только один if с объединенным условием и инструкция else которая срабатывает при успешном введении данных

### Задание 2
* Переписать код ниже с использованием конструкции switch…case

let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
console.log('вы отменили')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}