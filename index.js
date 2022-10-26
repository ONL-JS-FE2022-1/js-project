function sum(a, b) { // детермінована функція
    return a + b;
}

sum(2, 2); // 4
sum(2, 2); // 4

/*
Детермінована функція - це функція, яка при одних і тих же аргументах ЗАВЖДИ повертає один і той самий результат
*/

let variable = 5;
function addToNumberSomeVariable(a) { // недетермінована функція
    return a + variable;
}

addToNumberSomeVariable(5); // 10

variable = 20;

addToNumberSomeVariable(5); // 25