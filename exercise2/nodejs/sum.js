// Write a program that calculates the sum
// of all command line arguments that
// are passed in when starting the program.
//
// For example:
// node sum.js 1 2 3
// 6
"use strict"
let sum = 0.0;
process.argv.slice(2).forEach(function (value, index, array) {

    if (!isNaN(value)) {
        sum += parseFloat(value);
    }
});
console.log(sum);