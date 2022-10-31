let userTel1 = '3805465465465';
let userTel2 = '3805165161565';
let userTel3 = '4654351321232';

const userTels = {
    0: '3805465465465',
    1: '3805165161565',
    2: '4654351321232'
}

// Array

const arr = [2, 4, 6, 7];
const arr2 = new Array(2, 4, 6, 7);

///////


// вивести значення всіх елементів масиву array на єкран
const array = [7, 3, 5, 2];
array[0];
array[1];
array[2];
array[3];

for (let i = 0; i < array.length; i++) {
    console.log(
        array[i]
    );
}

/*
Задача 1

Дан масив [3, 6, 8, 2, 3, 5, 1].
Напишіть функцію, яка приймає масив в якості аргументу і повертає суму всіх елементів масиву.

Наприклад: [1, 2, 3] // sum: 1 + 2 + 3 = 6
*/


const arr1 = [3, 6, 8, 2, 3, 5, 1];

function sumArray(array) {
    let sum = 0;

    for(let i = 0; i < array.length ; i++) {
        if(typeof array[i] === 'number') {
            sum = sum + array[i];
        }
    }

    return sum;
}

console.log(sumArray(arr1));



/*
Задача 2

Дан масив [3, 6, 8, 2, 3, 5, 1].
Написати функцію, яка знаходить найбільше значення серед елементів масива.

1. Десь запам'ятати найбільше число, яке ми зустріли.
2. Порівняти його з наступним елементом масиву.
Якщо елемент масиву опиниться більшим ніж те число, що ми запам'ятали, 
то саме цей елемент масиву стає найбільшим запам'ятованим.

let num = 5;
let num2 = 4;

if(num > num2) {
    // ідемо далі
} else {
    num = num2
}

*/

const array22 = [3, 6, 8, 2, 3, 5, 1, 2, 3, 4, 55, 8];

function findMax(arrayMax) {
    let max = arrayMax[0];

    for(let i = 0; i < arrayMax.length; i++) {
        if(arrayMax[i] > max) {
            max = arrayMax[i];
        }
    }

    return max;
}

console.log(findMax(array22));

/*
Задача 3

Написати функцію, яка знаходить середнє арифметичне всіх елементів масиву.
[3, 6, 8, 2, 3, 5, 1] // 4
*/

function average(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            sum += array[i]
        }
    }
    return sum / array.length;
}


console.log(average(arr1));


/*
ПРАКТИКА 28.10.2022
*/

/*
Задача 3

Прийняти від користувача (через промпт) назву дня тижня і видати в алерт що заплановано у користувача у цей день.
Об'єкт з планами виглядає так:

const obj = {
    Mon: 'driver lesson',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'chill',
    Fri: 'hard work',
    Sat: 'go to park'
}
*/

const obj = {
    Mon: 'driver lesson',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'chill',
    Fri: 'hard work',
    Sat: 'go to park'
}

let userValue = prompt('Type your week day to get your plan: \n Monday = Mon, \n Tuesday = Tue ... e.t.c');
alert(obj[userValue] ? obj[userValue] : 'Nothing planned');

/*
Написати функцію, яка повертає загальну суму, витрачену на зарплатню всіх відділів

const departmentSalary = {
    HR: 20000,
    Development: 30000,
    Drive: 200,
    Clining: null,
    Marketing: 'not salary'
}

(for .. in)
*/

const departmentSalary = {
    HR: 20000,
    Development: 30000,
    Drive: 200,
    Clining: null,
    Marketing: 'not salary'
}

function sumSalary(salaryObj) {
    let result = 0;

    for(let key in salaryObj) {
        if(typeof salaryObj[key] === 'number') {
            result = result + salaryObj[key];
        }
    }

    return result;
}

console.log(sumSalary(departmentSalary));

/*
Задача 5

Написати функцію, яка приймає об'єкт і виводить всі значення всіх властивостей, оформлені у *....*

const obj = {
    key1: value2
}

// "key1": *value2*

(for ... in)
*/

function stylingConsole(obj) {
    for(let key in obj) {
        console.log(`"${key}": *${obj[key]}*`);
    }
}

stylingConsole(obj);