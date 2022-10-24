let number = prompt('Введіть число');
console.log(number, typeof number);


/* 

1. Напишіть функцію, яка повертає два числа і повертає те, що більше

2. Напишіть іншу функцію, яка знаходить середнє арифметичне з двох чисел.
Середнє арифметичеґне значення = одне число + друге число / кількість чисел

3. Функція, яка приймає одне число і визначає, чи є воно парним

*/

/* 1 задача
*/

let value1 = Number(prompt('Введіть перше число'));
let value2 = Number(prompt('Введіть друге число'));

function getBigger(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return 'Что-то работает не так!';
    }
}

let result = getBigger(value1, value2);
console.log(result);

/* 2 задача
*/

function average(num1, num2) {
    return (num1 + num2) / 2;
    // let avg = (num1 + num2) / 2;
    // return avg;
}

let result2 = average(value1, value2);
console.log(result2);

/* 3 задача
*/

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } else if (num % 2 > 0) {
        return false;
    } else {
        return 'Что-то работает не так!';
    }
}

console.log(isEven(9));