'use strict';
/*Given an array, return a new array that only includes the numbers.
``` javascript
const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN]
// [1, 2, 55, 166]*/

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN];
let arr2 = arr.filter(value => typeof value === 'number');
console.log(arr2);
