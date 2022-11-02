/* TASK 3

Дан масив об'єктів
const users = [
    {
        name: 'John',
        lastName: 'Doe',
        age: 18,
        email: 'meil@com'
    },
    {
        name: 'Jane',
        lastName: 'Doe',
        age: 20,
        email: 'meil@com'
    },
    {
        name: 'Josh',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
    {
        name: 'Jake',
        lastName: 'Doe',
        age: 21,
        email: 'meil@com'
    },
    {
        name: 'Jackson',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
]

Всім користувачам додати поле isSubscribed = false

*/

const users = [
    {
        name: 'John',
        lastName: 'Doe',
        age: 18,
        email: 'meil@com'
    },
    {
        name: 'Jane',
        lastName: 'Doe',
        age: 20,
        email: 'meil@com'
    },
    {
        name: 'Josh',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
    {
        name: 'Jake',
        lastName: 'Doe',
        age: 21,
        email: 'meil@com'
    },
    {
        name: 'Jackson',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
]

// TASK 3
// variant 1
function addSubscribeField(item) {
    item.isSubscribed = false;
}
//users.forEach(addSubscribeField);

// variant 2
// users.forEach((item) => {
//     item.isSubscribed = false;
// })


/*
Задача 4

Дан масив const arr = [2, 44, 11, 234, 8, 2, 4, 1]

Зробити новий масив, всі елементи якого = елемент зі старого масиву + 100
*/

const arr = [2, 44, 11, 234, 8, 2, 4, 1];
const plus100 = arr.map((item) => {
    return item + 100;
});


/*
Задача 5

На основі масиву об'єктів з задачі 3.
Створити новий масив користувачів, об'єкти мають бути у такому вигляді:
{
    fullName: 'John Doe',
    age: ....,
    email: ...
}

Тобто потрібно якось перетворити два поля name та lastName у одне поле - fullName
*/

function newUserObject(user) {
    return {
        fullName: `${user.name} ${user.lastName}`,
        age: user.age,
        email: user.email
    }
}

const newUsersArray = users.map(newUserObject);