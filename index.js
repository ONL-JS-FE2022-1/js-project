// function square(a) {
//     console.log(a*a);
// }

const array = [1,2,3,4,5];

// console.log(array.forEach(square)); // return undefined

array.forEach((item, index, array) => {
    console.log(`елмент: ${item} квадрат: ${item ** 2} индекс: ${index} массив: ${array}`);
})