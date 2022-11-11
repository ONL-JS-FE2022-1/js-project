class Figure {
    constructor(sideQuantity) {
        this.sideQuantity = sideQuantity;
    }

    getArea() {

    }
}

class Triangle extends Figure {
    constructor(a, b, angle) {
        super(3);
        this.a = a;
        this.b = b;
        this.angle = angle;
    }

    get a() {
        return this._a;
    }

    set a(value) {
        if(value < 0) {
            throw new RangeErrro('Side can`t be less than 0');
        }
        this._a = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        if(value < 0) {
            throw new RangeErrro('Side can`t be less than 0');
        }
        this._b = value;
    }

    getArea() {
        return this.a * this.b * Math.sin(this.angle);
    }
}

class Square extends Figure {
    constructor(a) {
        super(4);
        this.a = a;
    }

    get a() {
        return this._a;
    }

    set a(value) {
        if(value < 0) {
            throw new RangeErrro('Side can`t be less than 0');
        }
        this._a = value;
    }

    getArea() {
        return this.a * this.a;
    } 
}

// Написати аналогічний клас Circle, який буде мати метод для обчислення площі та буде інкапсулювати дані (аксессори)

class Circle extends Figure {
    constructor(r) {
        super(1);
        this.r = r;
    }

    getArea() {
        return Math.PI * this.r * this.r;
    }
}

function getFigureArea(figure) {
    if(figure instanceof Figure) {
        return figure.getArea();
    }
    throw new TypeError('Параметр не є фігурою');
}

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