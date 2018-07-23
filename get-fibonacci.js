'use strict';

// What is the input to the program
// a number N

// What is the output of the program
// an array of Fibonacci sequence between 1 to N

// What is the input to each recursive calls
// N, with an incrementing counter such that when counter is equal to N, program will exit

// What is the output of each recursive calls
// a push to an existing for current entry of the series, which is the sum of the preceeding two entries

function getFibonacci(n, i=3, arr=[1, 1]) {
  const currentNo = arr[arr.length - 1] + arr[arr.length - 2];
  const nextArr = [...arr, currentNo];
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return arr;
  }
  if (i === n) {
    return nextArr;
  }
  return [...getFibonacci(n, i+1, nextArr)];
}
console.log(getFibonacci(10));