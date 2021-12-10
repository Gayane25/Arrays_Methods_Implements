'use strict';
//*Implement these array methods
//map

const array1 = [1, 4, 9, 16];
const map1 = myMap(array1, x => x * 2);
console.log(map1);

function myMap(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const res = cb(arr[i], i, arr);
    newArr.push(res);
  }
  return newArr;
}
