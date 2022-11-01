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
users.forEach(addSubscribeField);

// variant 2
// users.forEach((item) => {
//     item.isSubscribed = false;
// })
