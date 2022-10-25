/*

Вася працює програмістом і отримує 50 $ за кожні 100 рядків коду. 
За кожне третє запізнення Васю штрафують на 20$.

Реалізувати меню:

- Користувач вводить бажаний дохід Васі та кількість запізнень. 
Порахувати скільки строк коду йому треба написати

- Користувач вводить кількість рядків коду, написану Васею та бажаний обсяг зарплати. 
Порахувати, скільки разів Вася може запізнитися

- користувач вводить кількість рядків коду та кількість запізнень. 
Визначити, скільки грошей заплатять Васі та чи заплатять взагалі.

*/

const salary100 = 50;
const penalty = 20;

function howCountLines(expectedSalary, lateCount) {
    return (Math.floor(lateCount / 3) * penalty + expectedSalary) / salary100 * 100;
}
console.log(howCountLines(2000, 9));

function howLates(expectedSalary, rowsCount) {
    const result = Math.floor((rowsCount / 100 * salary100 - expectedSalary) / penalty * 3);
    if (result > 0) {
        return result;
    } else {
        return 0;
    }
}
console.log(howLates(500, 5000));

function howSalary(rowsCount, lateCount) {
    const result = rowsCount / 100 * salary100 - Math.floor(lateCount/3) * penalty; 
    if (result > 0) {
        return result;
    } else {
        return 0;
    }
}
console.log(howSalary(5000, 4));