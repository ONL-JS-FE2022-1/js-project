/*
Задача.

Написати функцію, яка робить кожне слово у переданому рядку з великої літери

*/

function eachWordInUpper(str) {
    const wordArray = str.split(' ');
    const resultWordArray = [];

    for(let i = 0; i < wordArray.length; i++) {
        let word = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
        resultWordArray.push(word);
    }
    return resultWordArray.join(' ');
}

console.log(eachWordInUpper('hello to you'));