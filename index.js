'use strict';

function sum(a, b) {
    return a + b;
}

const arrow = (a, b) => a + b; // a + b === {return a+b}

const pow = x => x ** 2; // якщо 1 аргумент, то () можна опустити

const SuperFunc = () => {
    this.value = 'hello!';
}

const t1 = function() {
    console.log(arguments);
}

const t2 = () => {
    console.log(arguments); // Arrow Function не має arguments
}

///////

/*

1. Стрілочна функція не має власного контексту (її this буде вказувати на середовище її виконання)
2. Стрілочна функція не може бути функцією-конструктором
3. Стрілочна функція не має колекції arguments

*/

