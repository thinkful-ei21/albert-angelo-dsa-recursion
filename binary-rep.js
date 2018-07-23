'use strict';

// What is the input to the program
// say, number N,

// What is the output of the program
// binary representation of number N as a string

// What is the input to each recursive calls
// Math.floor() version of previous N divided by 2, while keeping N modular 2 as a string

// What is the output of each recursive calls
// the digit of current binary rep;

function binaryRep(n) {
  if (n < 1) {
    return '';
  }
  const currentDigit = n % 2;
  return binaryRep(Math.floor(n/2)) + currentDigit;
}
console.log(binaryRep(25));

/*

say n is 5, output is 101

math floor of 5/2 is 2, carry forward as argument
5 mod 2 is 1, carry forward as string

*/