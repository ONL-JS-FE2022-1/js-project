const catArray = [
    {
        name: 'Murzik',
        color: 'black',
        weight: 3,
        age: 2
    },
    {
        name: 'Murka',
        color: 'grey',
        weight: 5,
        age: 3
    },
    {
        name: 'Barsik',
        color: 'red',
        weight: 2,
        age: 1
    },
    {
        name: 'Cookie',
        color: 'brown',
        weight: 5,
        age: 2
    },
    {
        name: 'Stus',
        color: 'grey',
        weight: 2,
        age: 5
    },
    {
        name: 'Fagot',
        color: 'black',
        weight: 5,
        age: 3
    },
    {
        name: 'Kit',
        color: 'pink',
        weight: 2,
        age: 1
    },
]

// 1. Відсортувати котів за вагою на збільшення
// catArray.sort((cat1, cat2) => {
//     if(cat1.weight < cat2.weight) {
//         return -1;
//     } else {
//         return 1;
//     }
// });

/* returning:
-1 -> cat1, cat2
0 -> всі на місці
1 -> cat2, cat1
*/

/*
Задача 4

Відсортувати котів від найстаршого до наймолодшого.
Можете використовувати для вирішення цієї задачі ту форму, яку я показав вам на парі, а можете скористатись такою формою:

Для числового сравнения, вместо строкового, функция сравнения может просто вычитать b из a. Следующая функция будет сортировать массив по возрастанию:

function compareNumbers(a, b) {
  return a - b;
}
*/

// catArray.sort((cat1, cat2) => {
//     return cat2.age - cat1.age;
// });

/*
Задача 5

Відсіяти всіх котів окрім чорних.
*/

// const blackCatArray = catArray.filter((cat) => {
//     return cat.color === 'black';
// });

/*
Задача 6

Створити новий масив, який складається з імен котів.
*/

const catNames = catArray.map((cat) => {
    return cat.name;
})

