function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multy(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

console.log(sum); // sum = 0X0000076

const superFunction = sum;
sum(2, 2); // 4
superFunction(2, 4); // 6

/*
High Order Function (HOF) - Фунція вищого порядку - це функція, яка приймає іншу функцію в якості аргумента

Callback - Коллбек (функція зворотнього виклику) - це функція, ЯКУ передали як аргумент іншій функції
*/

function doingSomething(arg1, arg2, fun) { // HOF
    let result = fun(arg1, arg2);
    return result;
}

console.log(
    doingSomething(2, 4, function (a, b) {
        return a * b;
    })
);