/* 
Задача 1

Таска:
Написати функція truncate, яка приймає в якості аргументів рядок (str) і довжину (strLength).
Якщо довжина > strLength, то врізати рядок до цієї довжини і в кінці додати "..."
Якщо рядок менший, нічого не робити.

truncate('hello', 2); // he...
truncate('hello', 10); // hello

*/

function truncate(str, strLength) {
    if(str.length <= strLength) {
        return str;
    }
    
    const newStr = str.slice(0, strLength);
    return newStr + '...';
}

/*

Задача 2

Написати функцію checkSpam, яка повертає true, якщо переданий рядок містить слова 'xxx' або 'viagra', інакше false.

checkSpam('buy VIagRA now'); // true
checkSpam('free xxxxxxxxx'); // true
checkSpam('innocent rabbit'); // false

*/

// variant 1
function checkSpam(str) {
    const lowStr = str.toLowerCase();
    return lowStr.includes('viagra') || lowStr.includes('xxx');
}

// variant 2
function checkSpam2(str) {
    const spamArray = ['viagra', 'xxx', 'drugs'];

    let flag = false;

    for(let i = 0; i < spamArray.length; i++) {
        if(str.toLowerCase().includes(spamArray[i])) {
            flag = true;
        }
    }

    return flag;
}




// Домашня практика

/*
Задача 3.

Написати функцію яка перевіряє, чи є переданий рядок паліндромом.
Не зважаючи на регістр.
Паліндром - це коли рядок з обох боків читається однаково.

Anna - паліндром
Papa - не паліднром
Namman - паліндром
*/



/*
Задача 4

Написати функцію, яка приймає рядок і повертає кількість голосних літер, що містяться в рядку.
(мова про латинську абетку)

Голосні: ['a', 'e', 'i', 'o', 'u'];

*/