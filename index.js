/*
Напишіть клас RangeValidator
дві властивості:
from, to

from не може бути більше to

Завдання:
1. реалізувати сеттери для обох властивостей
2. геттер getRange, який має повертати масив цілих чисел цього діапазону
*/

class RangeValidator {
    constructor(from, to) {
        this.to = to; // this._to
        this.from = from;
    }

    set from(value) {
        if(typeof value !== 'number') {
            throw new TypeError('From must be a number');
        }
        if(value > this._to) {
            throw new RangeError('To must be a larger than from')
        }
        this._from = value;
    }

    set to(value) {
        if(typeof value !== 'number') {
            throw new TypeError('To must be a number');
        }
        this._to = value;
    }

    get to() {
        return this._to;
    }

    get from() {
        return this._from;
    }

    get getRange() {
        const arr = [];
        for(let i = this._from; i <= this._to; i++) {
            arr.push(i);
        }
        return arr;
    }

    validate(num) {
        return this.getRange.includes(num);
    }
}