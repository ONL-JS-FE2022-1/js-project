function MyArray() { // функція-конструктор масивів
    this.length = 0;
}

function myProtoArray() {
    this.push = function() {
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    },
    this.pop = function() {
        if(this.length > 0) {
            let lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        }
    }
}

MyArray.prototype = new myProtoArray;


const arr = new MyArray();
