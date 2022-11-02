/// sort

const array = [5,3,9,21,5,1,2,4,56];

function compareFunction(a, b) {
    if (b > a) {
        return -1;
    } else {
        return 1;
    }
}

/* returning:
-1 - спочатку a, потім b
0 - елементи залишаються незмінними
1 - спочатку b, потім a

a і b два сусідні елементи
*/

array.sort(compareFunction);

console.log(array);

const arrayWords = ['bbb', 'abb', 'aaa', 'aba'];
arrayWords.sort();
//console.log(arrayWords);

/*
Написати функцію-компаратор, яка відсортує масив у ЗВОРОТНЬОМУ порядку
*/