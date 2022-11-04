'use strict';

// rest operator - ...
// .., ..., .., .., -> []

function sum(a,b, ...arrayOfRestArguments) {
    console.log(arrayOfRestArguments);
    return a+b;
}

sum(3,4); // 7
sum(1,2,34,5);
sum(1,2,3,4,5,67,6); // 3

const arrowSum = (...restArray) => restArray.reduce((accum, current) => accum+current);

console.log(arrowSum(5,5,5,5));

// spread
// [] -> .., .., .., ...,

const numbers = [1,2,3,4,5];
sum(numbers); // не спрацює, бо весь масив запишеться в аргумент a
sum(numbers[0], numbers[1]); // теж не варіант - довго
sum(...numbers); // правильний варіант 


///////////////////////

const arr1 = [1,2,3,4,5]
const arr2 = [10,11,12,13,14,15]

// Зклейте два масиви в один, не використовуючи concat

const concatArray = [...arr1, ...arr2];