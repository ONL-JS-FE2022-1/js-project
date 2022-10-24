let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));

function addTwoNumbers(arg1, arg2) {
    num2 = 5;
    console.log(num2);
    
    // const result = arg1 + arg2;
    // return result;
}

addTwoNumbers(num1, num2);

console.log(num2);

/* Scope - область видимости
(це всі наші змінні, об'єкти і.т.д., які нам доступні)

Local Scope (локальна область видимості) - це всі наші змінні, об'єкти і.т.д. ВСЕРЕДИНІ нашої функції

Global Scope (глобальна область видимості) - це всі наші змінні, об'єкти і.т.д. з поточного коду
*/