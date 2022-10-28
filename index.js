/* Обчислювальні властивості */

const user = {
    'name': 'John', // Ключ 'name', значення - 'John'
    'favorite color': 'red',
    0: 'value'
}

/* Ключ в об'єкті може бути рядок або тип даних Symbol */


// . - оператор доступу за ім'м властивості

// user.name // 'John'
// user.'favorite color' // syntax error
// user.0 // syntax error

// [] - Оператор доступу до обчислювальної властивості (Computed property)

let name = 'Sam';

user[name]; // === user.Sam
user['favorite color'] // red
user[0]; // 'value'


/////////////////////////////////////////////

let key = 'a';


const obj = {
    a: 5
}

obj.key // undefined
console.log(obj[key]); // 5


//////////////////////////////////////////////

const someObj = {
    2: 10
}

// someObj.2 // syntax error
someObj[2] // 10
someObj['2']; // 10