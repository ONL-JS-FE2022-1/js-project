// primitives
Boolean
String
Number
BigInt
null
undefined
Symbol

const b1 = true; // false - boolean
const b2 = new Boolean([]);

const str = 'hello';
const str2 = new String('hello');

// object

// Symbol

const mySymbol = Symbol(); // без new!!!
const symb2 = Symbol('My second symbol'); // label for human

const obj = {
    test: 1,
    [mySymbol]: 123,
    abracadabra: '2123',
}