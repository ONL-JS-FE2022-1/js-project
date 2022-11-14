/*

Є ферма.
На фермі в нас є свійські тварини (корови, кози).
Є домашні тварини (кошки і собаки).

В кожної тварини є діти. В кожного з дітей може бути певна кількість дітей.

Реалізувати класи всіх тварин і додати тваринам певну кількість дітей 
(кількість дітей вказуєте у конструкторі під час стоврення єкземпляру об'єкту).

Просунутий рівень (задача *****):
Реалізувати функцію, яка підрахує кількість тварин на фермі.

*/

class Animal {
    constructor() {
        this.childs = null;
    }
}

class Cat extends Animal {
    constructor() {
        super();
    }
}

class Dog extends Animal {
    constructor() {
        super();
    }
}

class Cow extends Animal {
    constructor() {
        super();
    }
}

class Goat extends Animal {
    constructor() {
        super();
    }
}

/**
 * Функція створення ферми
 * @param {Animal (or Cat, Dog, Cow, Goat)} Type 
 * @param {number} quantity 
 */

function createFamily(Type, quantity) {
    const animals = new Array(quantity).fill(new Type());
    animals.forEach(animal => {
        const childs = new Array(quantity).fill(new Type());
        animal.childs = childs;
    })
    return animals;
}

/**
 * 
 * @param {Array of Animals} farm 
 */

function countFarm(farm) {
    return farm.reduce((accum, item) => {
        if(item.childs) {
            return accum + 1 + item.childs.length;
        }
    }, 0)
}

// const farm = [...createFamily(Cat, 3), ...createFamily(Dog, 2), ...createFamily(Cow, 5), ...createFamily(Goat, 1)];

const farm = [...createFamily(Cat, 1), ...createFamily(Dog, 1)];