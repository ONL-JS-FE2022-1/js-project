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


function rememberParametr(arg) {
    return function() {
        return arg;
    }
}

/*
Написати функцію, яка приймає параметр і повертає іншу функцію, 
що очікує другий параметр і повертає суму двох параметрів
*/

function createAdder(n) {
    return function(m) {
        return n = m + n;
    }
}

/*
Створіть функцію isCorrectPassword, яка буде приймати правильний пароль і яка буде повертати внутрішню функцію, 
яка приймає введену строку (також пароль) та повертає логічне значення true, 
якщо введена строка співпадає з паролем, false - якщо ні.
*/

function isCorrectPassword(password) {
    return function(checkedPassword) {
        return checkedPassword === password;
    }
}

////////////// URL ///////////
// protocol - https / http
// - ://
// hostName - developer.mozilla.org
// path - ua/docs/Web

const createURL = function(protocol) {
    return function(hostName) {
        return function (path) {
            return `${protocol}://${hostName}/${path}`;
        }
    }
}

const rememberHost = createURL('http');
    const site1 = rememberHost('test.org');
    const site2 = rememberHost('site.com');
    const site3 = rememberHost('wiki.org');