'use strict';
//Implement these array methods
//find()

const ages = [3, 10, 18, 20];
const checkAge = findMethod(ages, age => age > 18);
console.log(checkAge);
function findMethod(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      return arr[i];
    }
  }
  return undefined;
}
