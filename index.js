/*
Set - множина (множество)
набір унікальних значень
*/

/*
Дан масив: [2,3,3,4,6,6,6,6,7,7,7,7,2,2,2,2,1,1,1]
Повернути масив без повторень (Set)
*/

/* варіант простіше
function arrWithoutDoubles(arr) {
    const set = new Set(arr);
    const arrFromSet = [...set.values()];
    return arrFromSet;
}
*/

const arrWithoutDoubles = arr => [...new Set(arr)];