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


const map1 = new Map(); // <-- [[key1, value1], [[key2, value2]], [key3, value3]]

/*

Задача: написати функцію, яка приймає два рядка і перевіряє, чи є вони анаграмами одне до одного.
Зробити це за допомогою Map.

'рама' - 'мара'.
'test' - 'setT'.

р - 1       р - 1
а - 2       а - 2
м - 1       м - 1

Декомпозиція задачі.

1. Обидва рядки привести до одного регістру.
2. В одному і іншому слові однакова кількість літер
3. Порівняти розмір словників і їхній вміст (скільки разів зустрілась та чи інша літера)

*/

/* варіант спрощений

function checkAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    const lowStr1 = str1.toLowerCase();
    const lowStr2 = str2.toLowerCase();

    const map1 = new Map();
    const map2 = new Map();

    for(const letter of lowStr1) {
        if(map1.has(letter)) {
            const letterCount = map1.get(letter);
            map1.set(letter, letterCount + 1);
        } else {
            map1.set(letter, 1);
        }
    }

    for(const letter of lowStr2) {
        if(map2.has(letter)) {
            const letterCount = map2.get(letter);
            map2.set(letter, letterCount + 1);
        } else {
            map2.set(letter, 1);
        }
    }

    for(const key of map1.keys()) {
        if(map1.get(key) !== map2.get(key)) {
            return false;
        }
    }
    return true;
}

*/

function createVocalbuary(str) {
    const mapFromStr = new Map();

    for(const letter of str) {
        if(mapFromStr.has(letter)) {
            const letterCount = mapFromStr.get(letter);
            mapFromStr.set(letter, letterCount + 1);
        } else {
            mapFromStr.set(letter, 1);
        }
    }

    return mapFromStr;
}

function checkAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    const map1 = createVocalbuary(str1.toLowerCase());
    const map2 = createVocalbuary(str2.toLowerCase());

    if(map1.size !== map2.size) {
        return false;
    }

    for(const key of map1.keys()) {
        if(map1.get(key) !== map2.get(key)) {
            return false;
        }
    }
    return true;
}

/*
map1 {
    {p: 2},
    {r: 1},
    {t: 4}
}

map2 {
    {p: 4},
    {r: 1},
    {t: 4}
}
*/