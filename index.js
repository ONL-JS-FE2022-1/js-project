// splice
// splice(M, L, ) - мутує (змінює) початковий масив, видаляючи (та) додаючи нові елементи

const arr = [1,2,3,4,5];

// console.log(arr.splice(2,2));
// console.log(arr);

console.log(arr);
console.log(arr.splice(1, 0, 'hello', 456));
console.log(arr);