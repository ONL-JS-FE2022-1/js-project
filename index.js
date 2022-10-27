// Функція-конструктор

function Cat(name, color, breed, age) { // Угода: функції-конструктори називаються з великої літери
    this.name = name; // this - посилання на ось цього новостворенного кота
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.run = function() {
        return this.name + ' is running';
    }
}

const cat1 = new Cat('Bublik', 'red', null, 2);
const cat2 = new Cat('Murz', 'white', 'Siam', 4);
const cat3 = new Cat('Test');
cat3.age = 3;
cat3.boyfriend = 'Tyzik';

/*
Функція-конструктор Country, яка приймає в якості аргументів:
- назва країни
- популяція (population)
- площа (area)
- плотність населення (density): популяція цієї ж країни / площу цієї ж країни

Зробіть декілька країн
*/