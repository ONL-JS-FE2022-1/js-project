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