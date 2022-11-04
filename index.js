'use strict';

// this - це контекст

function test() { // Function Declaration
    console.log(this); // this вказує на функцію
}
test();

const test2 = function() { // Function Expression
    console.log(this); // this вказує на функцію
}
test2();

console.log(this); // this - вказує на глобальний об'єкт window


const arrow = () => { // Arrow Function не мають власного контексту
    console.log(this);
}
arrow();
