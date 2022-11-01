/*

1. З масиву [1,2,3,4,5] зробіть масив [1,4,5];

2. З масиву [1,2,3,4] запишіть в новий масив [2,3,4];

3. З масиву [1,2,3,4,5] зробіть масив [1, 'w', 're-td', 2, 3, 4, 'vv', 5, 'aa'];

*/

// 1
const arr = [1,2,3,4,5];
arr.splice(1, 2); // 1, 4, 5

// 2
const arr2 = [1,2,3,4];
const newArray = arr2.slice(1); // 2, 3, 4

// 3
const arr3 = [1,2,3,4,5];
arr3.splice(1, 0, 'w', 're-td');
// variant 1
// arr3.splice(6, 0, 'vv');
// arr3.push('aa');
// variant 2
arr3.splice(-1, 1, 'vv', 5, 'aa');

/*
Напишіть функцію, яка перевіряє, чи є в масиві два однакових елементи.
Масив приймаємо як аргумент функції, функція повертає true, якщо є два елемента однакових поспіль
false - якщо таких немає

[1, 2, 3, 4, 5] // false
[1, 2, 2, 3, 4] // true (2,2)
*/

function isDoubleElement(array) {
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] === array[i + 1]) {
            return true;
        }
    }
    return false;
}