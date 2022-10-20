/*
Перетворення (приведення) типу даних
*/

let num5 = 6 - '1';
/* 
Неявне перетворення типу даних
(Неявное преобразование типа данніх)
*/
console.log(num5);

let thisIsNumber = Number('45'); // явне перетворювання
let thisIsNumber2 = '45' - 0; // неявне (автоматичне)

let booleanNumber = true + 1;
console.log(booleanNumber);

/*
Boolean автоматично приводиться до типу Number
true = 1
false = 0
*/

/* String */

let str = String(45);
let str2 = null + '';
console.log(str2);

let notAnumber = 2 * 'Hello';
console.log(notAnumber);
Number('Hello');

/* typeof */
let box = true;
console.log(typeof thisIsNumber);