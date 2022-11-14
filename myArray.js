/*
Задача 1

Переписати MyArray на класи
https://github.com/ONL-JS-FE2022-1/js-project/blob/f0474e1a7928c3195801ff5dc46807576d39140b/myArray.js

Якщо впораєтесь раніше, то спробуйте додати метод, який буде працювати аналогічно Array.isArray()
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
*/

class MyArray {
    constructor() {
        this.length = 0;
    }

    static isMyArray(obj) {
        return obj instanceof MyArray;
    }

    push() {
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }

    pop() {
        if(this.length > 0) {
            let lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        }
    }

    forEach(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }

    map(callback) {
        const newArr = new MyArray();
        for(let i = 0; i < this.length; i++) {
            newArr.push(callback(this[i], i, this));
        }
        return newArr;
    }
}