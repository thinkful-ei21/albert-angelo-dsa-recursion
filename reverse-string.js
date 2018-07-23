'use strict';

// What is the input to the program
// string

// What is the output of the program
// reverse of original string

// What is the input to each recursive calls
// the string minus last letter

// What is the output of each recursive calls
// reversed string

function reverse(str, newStr = '') {
  if (str.length === 0) {
    return '';
  }
    
  str = str.split('');
  let char = str[str.length - 1];
  newStr += char;
  console.log(newStr);
  reverse(str.slice(0, str.length - 1).join(''), newStr);
}
reverse('word');



// another way
function reverseWord(str) {
  if (!str.length) {
    return '';
  }
  const currentChar = str.charAt(0);
  return reverseWord(str.slice(1)) + currentChar;
}
console.log(reverseWord('stuff'));