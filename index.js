let value = 10;

function wrapper() {
    let value = 20;
    console.log('WRAPPER function', value);

    return function log() {
        console.log('LOG function', value);
    }
}

// function counter() {
//     let i = 0;
//     i++;
//     return i;
// }

function makeCounter() {
    let i = 0;

    return function() {
        return i++;
    }
}

function makeCounter2() {
    let counter = 0;

    return {
        increment() {
            return ++counter;
        },
        decrement() {
            return --counter;
        }
    }
}

const fnObj = makeCounter2();