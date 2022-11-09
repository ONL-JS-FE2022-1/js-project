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


/*
Задача: порахувати загальну вагу автомобіля

Клас паливо
Клас авто
*/

class Fuel {
    constructor(volume, density) {
        this.volume = volume; // об'єм
        this.density = density; // щільність
    }

    getWeight() {
        return this.volume * this.density;
    }
}

const diesel = new Fuel(50, 0.9);
const a95 = new Fuel(99, 0.3);

const MIDDLE_WEIGHT_PASSANGER = 80;
class Auto {
    constructor(name, ownWeight, fuel, passangers) {
        this.name = name;
        this.ownWeight = ownWeight;
        this.fuel = fuel;
        this.passangers = passangers;
    }

    // Написати метод, що обчислює повну вагу авто на основі його власної ваги + ваги палива
    getFullWeight() {
        return this.ownWeight + this.fuel.getWeight() + (this.passangers * MIDDLE_WEIGHT_PASSANGER);
    }
}

const auto = new Auto('BMW', 2500, diesel, 15);
const auto1 = new Auto('Lexus', 2500, a95, 1);