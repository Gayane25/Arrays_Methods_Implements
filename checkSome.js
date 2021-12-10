'use strict';
//Implement these array methods
//some();
/* some and every have some difference , 
every() returns true if every index in array satisfies the condition;
 some() returns true if one index satisfies the condition  */

const array = [1, 2, 3, 4, 5];
const even = checkSome(array, element => element % 2 === 0);
console.log(even);

function checkSome(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    } else {
      cb(arr[i], i, arr);
    }
  }
  return false;
}
