/*
    Minty Allred
    File name: fizzbuzz.js
    10/09/2026
*/

let fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            console.log("Fizz");
        } else if (i % 3 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

console.log(fizzBuzz(100));