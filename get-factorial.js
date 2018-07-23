'use strict';

// What is the input to the program
// number N

// What is the output of the program
// factorial of N, that is N x N-1 x N-2 .... x N=1

// What is the input to each recursive calls
// N - 1, as it reduces to 0, where the base case is

// What is the output of each recursive calls
// current product of whereever we are at between N to 1

function getFactorial(n) {
  if (n === 1) {
    return n * 1;
  }
  return n * getFactorial(n - 1);
}
console.log(getFactorial(6));