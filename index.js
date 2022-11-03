function MyArray() {
    this.length = 0;

    this.push = function() {
        // push - добавляет єлемент, которій нам передают в конец массива
        // изначально, длина массива (this.length = 0)
        // куда добавлять? = что нам нужно добавить?
        // this[this.length] = value;
        // this.length++;

        // this[this.length] = value; // this[key] = value
        // this.length++;
        // return this.length;




        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }

    this.pop = function() {
        if(this.length > 0) {
            let lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        } 
    }
}

const arr = new MyArray();

/*
Перепишіть push таким чином, щоб push міг приймати та додавав до масиву будь-яку перредану кількість елементів
Якщо ви знаєте цей матеріал, то оператор розширення не використовуйте =)

arr.push(3,2,1,3,4,5555,2,1);

#arguments
*/






const cat = {
    name: 'Barsik',
    color: 'red',
    age: 1
};

const cat2 = {
    name: 'Murzik',
    color: 'black',
    age: 5
};

const catMethods = {
    run: function() {
        console.log('Cat is running!');
    },
    meow: function() {
        console.log('Meow!');
    }
}

cat.__proto__ = catMethods;
cat2.__proto__ = catMethods;