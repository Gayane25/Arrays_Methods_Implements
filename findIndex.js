'use strict';
//Implement these array methods
// findIndex()

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = findIndex(array1, el => el > 13);
console.log(isLargeNumber);

function findIndex(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      return i;
    }
  }
  return -1;
}
