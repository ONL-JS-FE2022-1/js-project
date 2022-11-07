const a = 5;

const b = a;

console.log(
    'hello'
    .length);
    
/*const str = 'Привіт!';
console.log(
    str.toUpperCase()
);*/

const bool = true; // bool - це просто примітив логічного типу

bool.toString();
/*
1. Створюється об'єкт-обгортка Boolean: obj = new Boolean(true);
2. obj.toString();
3. отримуємо результат, і об'єкт-обгортка знищується
*/

/*console.log(
    null.test
); // помилка!

*/

const str = 'abracadabra';

str
// 'abracadabra'
str.charAt(6)
// 'd'
str[6]
// 'd'
str.charCodeAt(3)
// 97
str.concat(' hello')
// 'abracadabra hello'
str
// 'abracadabra'
str.includes('cada')
// true
str.includes('cat')
// false
str.indexOf('r')
// 2
str.indexOf('a')
// 0
str.repeat(5)
// 'abracadabraabracadabraabracadabraabracadabraabracadabra'
str.replace('abra', 'cat')
// 'catcadabra'
str
// 'abracadabra'
str.slice(0, 5)
// 'abrac'
'    Ivanob3    '.trim()
// 'Ivanob3'
'hi hi hi'.split(' ')
//(3) ['hi', 'hi', 'hi']0: "hi"1: "hi"2: "hi"length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
'asdasd*fsdfsgfddh*AFDasd*dfsdf'.split('*')
//(4) ['asdasd', 'fsdfsgfddh', 'AFDasd', 'dfsdf']0: "asdasd"1: "fsdfsgfddh"2: "AFDasd"3: "dfsdf"length: 4[[Prototype]]: Array(0)
'hi hi hi'.split(' ').join('')
// 'hihihi'
'AIDJPIAJDPAOSDJ'.toLowerCase()
// 'aidjpiajdpaosdj'
str.toUpperCase()
// 'ABRACADABRA'