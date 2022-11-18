/* Деструктуризація */

const monitor = {
    sizes: {
        width: {
            value: 5,
            scale: 'cm'
        },
        height: {
            value: 5,
            scale: 'cm'
        }
    },
    brightness: 750,
    refresh: {
        value: 144,
        scale: 'Hnz'
    },
    color: 'black',
    resolution: '4K'
}

monitor.color; // black => color
monitor.sizes.height; // height => object
monitor.sizes.height.value; // значення висоти

// const height = monitor.sizes.height.value;


// const {resolution, color: monitorColor} = monitor;
const {sizes: {height: {value: heightValue}, width: {value: widthValue}}} = monitor;
// heightValue, widthValue - звичайні змінні

const {color, brightness, resolution, ...restOfMonitor} = monitor;

const userObj = {
    name: {
        first: 'John',
        last: 'Doe'
    },
    adress: {
        city: 'Dnipro',
        street: 'Frunze'
    },
    auth: {
        login: 'johndoe@gmail.com',
        pass: '#hash'
    },
    favorites: {
        dish: {
            eat: 'sandwich',
            drink: 'black tea with lemon'
        }
    }
}

/*
1.Витягти з об'єкта ім'я юзера і перейменувати його на firstName.
2.Витягти улюблений напій і переменувати його на favoriteDrink.
3.Витягти логін і перейменувати email
*/

const {
    name: {
        first: firstName
    },
    auth: {
        login: email
    },
    favorites: {
        dish: {
            drink: favoriteDrink
        }
    },
    ...restOfObj
} = userObj;


/* Деструктуризація масивів */

const arr = [1, 2, 3, 4, 5, 6];

const [first, second, ...restOfArr] = arr;

/* Деструктуризація вхідних параметрів */

function getFullName({firstName, lastName, ...rest}) { // всі інше, окрім firstName, lastName ігнорується
    console.log(rest);
    return `${firstName} ${lastName}`;
}


/*
Написати функцію, яка приймає об'єкт монітора, виймає з нього розміри 
висоти і ширини і на їх основі повертає розмір діагоналі
*/


function getDiagonal({
    sizes: {
        height: {
            value: a
        },
        width: {
            value: b
        }
    }
}) {
    return Math.sqrt(a**2 + b**2);
}





























const test1 = {
    test2: {
        test3: {
            test4: {
                test5: {
                    test6: {
                        test7: {
                            test8: {
                                test9: {
                                    test10: {
                                        value: 'test'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}