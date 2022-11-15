/* Stack */

class Stack {
    constructor(maxSize) {
        this._maxSize = maxSize;
        this._size = 0;
    }

    get isEmpty() {
        return this._size === 0;
    }

    get size() {
        return this._size;
    }

    get maxSize() {
        return this._maxSize;
    }

    set size(value) {
        throw new Error('Access denied');
    }

    set maxSize(value) {
        throw new Error('Access denied');
    }

    push(value) {
        if(this.size >= this.maxSize) {
            throw new Error('Stack overflow');
        }
        this[`_${this.size}`] = value;
        this._size++;
        return this.size;
    }

    pop() {
        if(this.size > 0) {
            const lastItem = this[`_${this.size - 1}`];
            delete this[`_${this.size - 1}`];
            this._size--;
            return lastItem;
        } 
    }

    pick() {
        return this[`_${this.size - 1}`]
    }
}

const myStack = new Stack(4);

/* 

(2+2) + [2*(2/4)]
() [({})] // true

(2+2) + [2*(-1]+5] // false

Задача: написати функцію, яка приймає рядок, що містить дужки і повертає true, якщо дужки правильно парно
відкриваються і закриваються. false - якщо порядок порушений

Дужки можуть бути такі: (), {}, [], <>
*/


/*
1. Створюємо структуру, де будемо зберігати ось ці всі дужки.
2. Перебираємо рядок.
3. Якщо ми зустріли дужку, яка відкривається, покласти її в стек.
4. Якщо ми зустріли дужку, що закривається, проаналізувати її:
    - порівняти, чи є оця закриваюча дужка парною до останнього елементу стеку
    - якщо так, то видалити відкриваючу зі стеку
    - якщо ні, то повертаємо помилку
5. Проаналізувати, чи залишилось щось у стеку. Якщо рядок закінчився (після перебору), а в стеку щось залишилося
то порядок був неправильний. Якщо стек пустий, то все нормально (порядок був правильний)

На базовому рівні ваша функція має працювати тільки з дужками.
Додатково (**): ігнорувати всі символи, крім дужок (щоб можна було крім дужок передавати ще щось, наприклад, числа)
*/

function checkSequence(str) {
    let res = 0;
    for (const symbol of str) {
        if(symbol === '(') {
            res++;
        }
        if(symbol === ')') {
            res--;
        }
    }
    return res === 0;
}