class Test {
    constructor(value1, value2) {
        // create {} --> this
        this.key1 = value1;
        this.key2 = value2;
    }

    unStaticMethod() {
        console.log('Я нестатичній метод, я буду работать для єкземпляров класса')
    }

    static staticMethod(value) {
        console.log('Я статічній метод, я буду работать для всего класса вне зависимости от конкретного єкземпляра')
    }
}

Test.newMethod = function (value) {
    console.log('Статичний метод поза класом')
}