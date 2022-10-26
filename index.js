/* 
Задача 1

prompt
Виведіть користувачу пропозицію меню:
1 - Сік
2 - Вода
3 - Кава
4 - Чай
5 - Лимонад
    
Вивести в консоль "Сік" чи "Вода" чи............
Зробити через switch-case
*/

const userChoice = prompt('Оберіть напій: \n1 - Сік \n2 - Вода \n3 - Кава \n4 - Чай \n5 - Лимонад');

switch(userChoice) {
    case '1': {
        console.log('Сік');
        break;
    }
    case '2': {
        console.log('Вода');
        break;
    }
    case '3': {
        console.log('Кава');
        break;
    }
    case '4': {
        console.log('Чай');
        break;
    }
    case '5': {
        console.log('Лимонад');
        break;
    }
    default: {
        console.log('Оберіть щось із меню!');
    }
}

/*
Задача 2

3 промпти
1 промпт - перше число
2 промпт - друге число
3 промпт - Дія, яку потрібно виконати над числами

Зробити калькулятор =)

Користувач послідовно вводить (одне за одним)
- перше число
- друге число
- один з варіантів: +, -, *, /

Кожну дію зробити окремою функцією. 
Весь калькулятор - це теж окрема функція, роль якої 
- спитати у користувача два числа і дію і повернути йому результат у якості alert
*/

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

function calculator() {
    const a = Number(prompt('Введіть перше число:'));
    const b = Number(prompt('Введіть друге число:'));
    const action = prompt('Введіть потрібну дію: +, -, *, /');

    let result;
    switch(action) {
        case '+': {
            result = sum(a, b);
            break;
        }
        case '-': {
            result = sub(a, b);
            break;
        }
        case '*': {
            result = multy(a, b);
            break;
        }
        case '/': {
            result = div(a, b);
            break;
        }
        default: {
            result = 'Введіть правильну дію'
        }
    }
    console.log(result);
}

calculator();