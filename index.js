/*
Map (Карта, Мапа)

Зберігає пари ключ-значення
Має розмір (size)

Відмінності від звичайного об'єкта:
1. Запам'ятовує елементи в тому порядку, в якому ми їх додаємо.
2. Ключем може бути будь-який тип даних: String, Number, Boolean, BigInt, Function, Object
(Об'єкти і функція передаються за посиланням)

Ключ має бути унікальним
*/

const vocalbuary = new Map();

vocalbuary.set('cat', 'кіт');
vocalbuary.set('dog', 'собака');
vocalbuary.set('eat', 'їсти');

function translater(str, options) {
    const vocalbuary = options.vocalbuary;
    const separator = options.separator;


    const arrayWords = str.toLowerCase().trim().split(separator);

    const translatedArray = arrayWords.map((word) => vocalbuary.has(word) ? vocalbuary.get(word) : word);

    return translatedArray.join(separator);
}

/*

Дано:

const user = {
    name: 'alex',
    firstName: 'Doe',
    id: 1
}

const user2 = {
    name: 'john',
    firstName: 'Doe',
    id: 2
}

const johnMessages = ['hello!', 'how a u?'];
const alexMessages = ['hi!', 'Im fine'];

Задача:
Зв'язати користувача і його повідомленняЮ щоб за юзером знайти його повідомлення
*/

const user = {
    name: 'alex',
    firstName: 'Doe',
    id: 1
}

const user2 = {
    name: 'john',
    firstName: 'Doe',
    id: 2
}

const johnMessages = ['hello!', 'how a u?'];
const alexMessages = ['hi!', 'Im fine'];

const messageMap = new Map();
messageMap.set(user.id, alexMessages);
messageMap.set(user2.id, johnMessages);

function createMessage(userID, newMessage, messageMap) {
    const userMessages = messageMap.get(userID);
    userMessages.push(newMessage);
}
