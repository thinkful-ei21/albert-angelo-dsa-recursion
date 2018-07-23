'use strict';

// input -> 3, or n

// output ->
//   3 - Another sheep jump over the fence
//   2 - Another sheep jump over the fence
//   1 - Another sheep jump over the fence

// input of each recursive call ->
//   1 minus the previous input, or n - 1

// output of each recursive call ->
//    logs out 'Another sheep jump over the fence', no values are being returned

function countingSheeps(n=0) {
  if (n === 0) {
    return;
  }
  console.log(`${n} - Another sheep jumped over the fence`);
  countingSheeps(n - 1);
}
countingSheeps(3);