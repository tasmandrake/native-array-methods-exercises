function multiplyBy10 (array) {
  return array.map(element => element * 10);
};

function shiftRight (array) {
 return array.map(function(element, i, arr) {
   if (i === 0) {
     return arr[arr.length - 1];
   }
  return arr[i - 1];
 });
};

function onlyVowels (array) {
  return array.map(element => element.replace(/[^aeiou]/g, ''));
};

function doubleMatrix (array) {
 return array.map(element => element.map(i => i * 2));
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
