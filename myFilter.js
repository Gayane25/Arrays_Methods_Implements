'use strict';
//Implement these array methods
//filter method
const array1 = [1, 4, 9, 16];
const tofilter = myFilter(array1, x => x > 4);
console.log(tofilter);

function myFilter(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
