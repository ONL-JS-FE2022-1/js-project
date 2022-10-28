
const todo = {
    Mon: 'drive lesson',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'chill',
    Fri: 'hard work',
    Sat: 'go to park'
}

/* 'key' in obj */

console.log('Mon' in todo);

const obj2 = {
    key1: undefined
}

let key1 = 'val';

console.log(key1 in obj2); // 'val' in obj2
console.log('key1' in obj2); // key1 in obj2

function greeting(user) {
    return `Hello, ${'name' in user ? user.name : 'Anonym'}`;
}

const user1 = {
    name: 'Vasya'
}

const user2 = {};

console.log(greeting(user1)); // Hello, Vasya
console.log(greeting(user2)); // Hello, Anonym