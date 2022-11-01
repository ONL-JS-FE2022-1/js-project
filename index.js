///// slice
// Копіює масив з індекса М (включно) до індекса N (не включаючи)
// arr.slice(M, N)

const array = [1, 2, 3, 4, 5];

console.log(array.slice());

console.log(array.slice(2, 4)); // 3, 4
console.log(array.slice(2)); // 3, 4, 5

const users = [
    {
        name: 'John',
        lastName: 'Doe'
    },
    {
        name: 'Jane',
        lastName: 'Doe'
    },
    {
        name: 'Jack',
        lastName: 'Dosh'
    },
]