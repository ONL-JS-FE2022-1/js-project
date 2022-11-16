class Queue {
    constructor(...args) {
        this._head = 0;
        this._tail = 0;
        for(const item of args) {
            this.enqueue(item);
        }
    }

    get size() {
        return this._tail - this._head;
    }

    enqueue(value) { // вставляє елемент в кінець черги
        this[this._tail] = value;
        this._tail++;
        return this.size;
    }

    dequeue() { // видаляє елемент з початку черги
        if(this.size > 0) {
            const lastItem = this[this._head];
            delete this[this._head++];
            return lastItem;
        }
    }
}