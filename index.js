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

function Country(name, population, area) {
    this.name = name;
    this.population = population;
    this.area = area;

    this.getDensity = function() {
        return this.population / this.area;
    }
}

const Ukraine = new Country('Ukraine', 43810000, 603700);

/*
Створити функцію-конструктор авто, яке має:
- назву
- максимальну швидкість
- поточну швидкість // в момент створення, поточна швидкість = 0
- метод прискорення (accelerate) - приймає в якості аргумента певне прискорення // прискорення не може бути більше за максимальну швидкість
- метод сповільнення (deaccelerate) - приймає в якості аргумента певне сповільнення // сповільнення не може бути менше за 0
- метод зупинки (stop)
*/

function Auto(name, maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.speed = 0;

    this.accelerate = function(accelValue) {
        this.speed = this.speed + accelValue;
        if(this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        return this.speed;
    }

    this.deaccelerate = function(deaccelValue) {
        this.speed = this.speed - deaccelValue;
        if(this.speed < 0) {
            this.speed = 0;
        }
        return this.speed;
    }

    this.stop = function() {
        this.speed = 0;
        return this.speed;
    }
}

const auto1 = new Auto('Lanos', 220);