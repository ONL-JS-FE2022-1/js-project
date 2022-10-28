const user = {
    name: 'John',
    lastName: 'Doe',
    age: 20,
    'favorite color': 'red',
    movie: 'Blue moon',
    avatar: 'http://.....'
}

// for ... in

// НЕ ЦЕЙ for(;;)

for (let key in user) {
    console.log(`${key} ---- ${user[key]}`); // key ---- value
}