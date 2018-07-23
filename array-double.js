'use strict';

// input -> an array with a positive natural number in each element

// output -> an array like the input but each element is doubled

// input of each recursive call ->
//    1 minus the length of the previous input, or arr.slice(1)

// output of each recursive call ->
//    a new array with concat of previous element, plus current element, or [...prev element, next element]

function arrayDouble(arr=[]) {
  if (!arr.length) {
    return [];
  }
  const currentNo = arr[0] * 2;
  return [currentNo, ...arrayDouble(arr.slice(1))];
}

console.log(arrayDouble([1,2,3]));
console.log(arrayDouble([3,6,9]));