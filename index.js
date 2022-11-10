class Animal {
    constructor(color, name, tail) {
        this.name = name;
        this.color = color;
        this.tail = tail;
    }

    eat() {
        return `${this.name} is eating`
    }
}

// class Dog extends Animal - клас Dog розширює клас Animal (наслідує цей клас)
class Dog extends Animal {
    constructor(color, name, tail) {
        super(color, name, tail);
    }

    barking() {
        return `${this.name} is barking`
    }
}