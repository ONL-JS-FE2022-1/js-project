// Loops - Цикли

// while (умова) {
   // код повторюється, поки умова = true
// }

let iterator = 0;
/* Прохід циклу (коло) називається ітерація */
while(iterator < 10) {
    console.log(iterator);
    iterator++;
}

/* "Валідація значень" */
/* break зупиняє цикл */
while (true) {
    console.log('Не вірно!');
    break;
}

/* Задача: зробити 10 повторів циклу, вивести на консоль парні значення лічильника */

let i = 0;
while (i < 10) {
    if(i % 2 === 0) {
        console.log(i);
    }
    i++;
}

/*
Дан пароль = qwerty1234

Запитуйте у користувача через prompt, поки він не співпаде з тим, що лежить в змінній 
*/

let pass = 'qwerty1234';

// варіант 1
// while(true) {
//     let userPass = prompt('Введіть свій пароль');
//     if(userPass === pass) {
//         console.log('Пароль вірний!')
//         break;
//     }
// }

// варіант 2
// let userPass2 = prompt('Введіть свій пароль');
// while(userPass2 !== pass) {
//     userPass2 = prompt('Введіть свій пароль ще раз!');
// }


/* do {
    тут блок коду, який буде повторювано виконуватись
} while(умова)
*/ 

let password = '1234';
let promptPassword = null;

do {
   promptPassword = prompt('Введіть свій пароль');
} while (promptPassword !== password)