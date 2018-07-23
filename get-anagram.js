'use strict';

// What is the input to the program
// a string

// What is the output of the program
// an array of every possible permutation of said string

// What is the input to each recursive calls
//

// What is the output of each recursive calls
//

function getAnagram(str) {
  let anagrams = [];
  if (str.length === 2) {
    const firstElem = str[0] + str[1];
    const secondElem = str[1] + str[0];
    return [firstElem, secondElem];
  }
  for (let i = 0; i < str.length; i++) {
    const prefix = str[i];
    const beforePrefix = str.slice(0,i);
    const afterPrefix = str.slice(i+1);
    const lesserAnagrams = getAnagram(beforePrefix+afterPrefix);
    lesserAnagrams.forEach(each => anagrams.push(prefix + each));
  }
  return anagrams;
}
console.log(getAnagram('abcd'));

/* more psuedo codes...

given 'ab', return:
['ab', 'ba'];

given 'abc', return:
[
  a + bc,
  a + cb,
  b + ac,
  b + ca,
  c + ab,
  c + ba,
]

*/