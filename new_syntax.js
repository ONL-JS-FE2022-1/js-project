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
        // if(typeof rate !== 'number' || typeof days !== 'number') {
        //     throw new TypeError('Rate and days must be a number!');
        // }
        // if(days < 0 || days > 31) {
        //     throw new RangeError('Days must be in 0 to 31');
        // }
        // if(rate < 0) {
        //     throw new RangeError('Rate must be a positive number');
        // }
        this._rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }

            /*
        Сеттер - метод для встановлення значення
        Геттер - метод для отримання значення
        */

    set rate(value) {
        if(value < 0) {
            throw new RangeError('Rate must be a positive number');
        }

        this._rate = value;
    }

    get rate() {
        return this._rate;
    }
}


// _

const wrkr = new Worker('John', 'Doe', 300, 12);
const wrkr2 = new Worker('Jane', 'Doe');

wrkr.rate = 100; // setter
wrkr.rate; // getter


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

/*
Клас Friend
У об'єкта є ім'я і кількість грошей, і друг
У вас є якась сума грошей і у вашого друга також
Завдання - порахувати спільну кількість грошей

*/

class Friend {
    constructor(name, amount, friend) {
        this.name = name;
        this.amount = amount;
        this.friend = friend;
    }

    getFullAmount() {
        if(this.friend === null) {
            return this.amount;
        }
        if(Array.isArray(this.friend)) {
            return this.amount + this.friend.reduce((sum, friend) => sum + friend.getFullAmount(), 0);
        }
        return this.amount + this.friend.getFullAmount();
    }
}

const friend1 = new Friend('Igor', 5, null);
const friend2 = new Friend('Miroslav', 15, null);

const myFriend = new Friend('Vlad', 20, [friend1, friend2]);
const me = new Friend('Roman', 10, myFriend); // myFriend => [friend1, friend2]