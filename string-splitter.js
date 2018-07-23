'use strict';

// What is the input to the program
//   a string, with a separator, plus the format of the said separator

// What is the output of the program
//   an array of each word from the string previously separated by said separator

// What is the input to each recursive calls
//   prevous strong shortened by something

// What is the output of each recursive calls
//   if separator is found, concat the array with a word
//   if separator is not found, it continues

function stringSplitter(str, separator, i=0) {
  if (i === str.length) {
    return [str.slice(0, str.length)];
  }
  if (str.slice(i, i+separator.length) === separator) {
    return [str.slice(0,i), ...stringSplitter(str.slice(i+separator.length, str.length), separator)];
  }
  return [...stringSplitter(str, separator, i+1)];
}
console.log(stringSplitter('the empire did nothing wrong', ' '));