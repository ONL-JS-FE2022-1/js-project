//alert('2+2=' + (2+2));

/*
'Привіт'
"Привіт"
`Привіт`
*/

//let name = 'Вася';
//alert(`Привіт, ${name}`);
//alert(`2+2=${2+2}`);
//alert('2+2=${2+2}');




// const one = Number(prompt('One number'));
// const two = Number(prompt('Second number'));

//alert(''+one+'+'+two+'='+(one+two));
// 2+2=4

// alert(`${one} + ${two} = ${one + two}`);


/////////////////////////////////////////////////////////////////////

// У нас є функція
function greetingUser(user) {
    return `Hey ${user.name} ${user.surname}. You will be ${user.age + 1} next year.`
}

// та у нас є об'єкт
const user = {
    name: 'John',
    surname: 'Doe',
    age: 15
}

console.log(greetingUser(user));

// написати функцію таким чином, щоб вона привітала користувача та вказала, скільки йому років має виповнитись у наступному році