// const number = Number(prompt('Введіть число'));

// if (number % 5 === 0) {
//     console.log('ділиться на 5');
// } else if (number % 3 === 0) {
//     console.log('ділиться на 3');
// } else if (number % 2 === 0) {
//     console.log('ділиться на 2');
// }

/*

switch(вираз) {
    case значення_виразу: робимо щось одне;
    case значення2_виразу: робимо щось інше;
    case значення3_виразу: робимо щось інше;
    default: робимо щось, якщо інші значення не підійшли
}

*/

let monthNumber = 15;

switch (monthNumber) {
  case 1:
  case 2:
  case 12: {
    console.log('зима')
    break
  }
  case 3:
  case 4:
  case 5: {
    console.log('весна')
    break
  }
  case 6:
  case 7:
  case 8: {
    console.log('літо')
    break
  }
  case 9:
  case 10:
  case 11: {
    console.log('осінь')
    break
  }
  default: {
    console.log('Введи число від 1 до 12')
  }
}

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