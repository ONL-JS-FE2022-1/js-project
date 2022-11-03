/*
LADDER

Задача: створити функцію-конструктор для сходів
Об'єкт має властивість
currentStair // сходинка, на якій ми зараз знаходимось. Початково = 0

Має методи:
up() - піднімає на сходинку вище
down() - опускає на сходинку нижче
showStair() - показує, на якій сходинці ми зараз знаходимось
*/

function Ladder() { // функция-конструктор
    this.currentStair = 0;
}

function LadderProto() { // функция-конструктор
    this.up = function() {
        console.log('up')
        this.currentStair++;
        return this;
    }

    this.down = function() {
        console.log('down')
        this.currentStair--;
        return this;
    }

    this.showStair = function() {
        console.log('currentStair')
        return this.currentStair;
    }
}

Ladder.prototype = new LadderProto();

const ladder = new Ladder();
// ladder.up().up().down().up().showStair();