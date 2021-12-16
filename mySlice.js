'use strict';
// .slice()implement

const mySlice = (arr, param1, param2) => {
  if (typeof param2 === 'undefined' || param2 > arr.length) {
    param2 = arr.length;
  }
  let newArr = [];
  for (let i = param1; i < param2; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(mySlice([3, 5, 10, 15, 16, 13], 1, 3));
