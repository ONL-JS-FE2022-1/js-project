// reduce
// зводить якусь кількість елементів до одного результуючого знаечння

const array = [2, 3, 1, 2, 34, 21];

function reducer(accumulator, item) {
    return accumulator + item;
}

const sum = array.reduce(reducer, 0);

// function reduce (accumulatorNumber, array) {
//   let accumulator = accumulatorNumber
//   for (let i = 0; i < array.length; i++) {
//     accumulator = accumulator + array[i];
//   }
//   return accumulator;
// }

// const sum = reduce(0, array);