// Class
/* 

class MyClass {
    // поля і методи класу
    constructor() {...}
    method1() {...}
    method2() {...}
    method3() {...}
    ...
}

*/

class User {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`
    }
}

const user1 = new User('John', 'Doe', 56);
const user2 = new User('Jane', 'Doe', 68);

/*
Написати клас Worker.
У працівника є ім'я, прізвище, ставка за робочий день і кількість відпрацьованих днів у цьому місяці
Написати метод, який повертає зарплатню цього робітника за поточний місяць
*/

const MIN_ZP = 6700;
const WORK_DAYS = 21;

const MIN_RATE = MIN_ZP / WORK_DAYS;

class Worker {
    constructor(name, lastName, rate = MIN_RATE, days = WORK_DAYS) {
        this.name = name;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const wrkr = new Worker('John', 'Doe', 300, 12);
const wrkr2 = new Worker('Jane', 'Doe');


// Параметри за замовченням

function sum(a = 10, b = 5) {
    console.log(a, b);
}

sum(3, 2);
sum();