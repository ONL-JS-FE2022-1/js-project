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

function translater(str, vocalbuary) {
    const arrayWords = str.toLowerCase().trim().split(' ');

    const translatedArray = arrayWords.map((word) => {
        if(vocalbuary.has(word)) {
            return vocalbuary.get(word);
        }
        return word;
    })

    return translatedArray.join(' ');
}