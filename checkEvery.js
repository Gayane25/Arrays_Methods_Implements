//Implement these array methods
//Every();
'use strict';

const array1 = [2, 10, 12, 20];
const isEven = checkEvery(array1, el => el % 2 === 0);
console.log(isEven);
function checkEvery(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
    return false;
  }
}
