// Recursion

// pow(x, n); 
// pow(2, 2); 4
// pow(2, 4); 16
// pow(2, 3); === 2 * 2 * 2 = 8

// Ітераційний підхід (ітераційне мислення)
// function pow(x, n) {
//     let result = 1;

//     // множимо result на x n разів в циклі
//     for(let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// console.log(pow(3, 4)); // 81

// Рекурсивний підхід (рекурсивне мислення)
function pow(x, n) {
    if(n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log(pow(2, 4)); // 81

/*
                   if n===1  = x
             /
pow(x, n) = 
             \
                   else      = x * pow(x, n - 1) 
*/

// x^n = x * x^(n-1)


