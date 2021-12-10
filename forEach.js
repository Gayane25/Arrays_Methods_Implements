'use strict';
//Implement these array methods
//forEach

function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}
const cb = el => console.log(el);

console.log(myForEach([5, 4, 3], cb));
