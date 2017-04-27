function onlyEven(array) {
  return array.filter(element => element % 2 === 0);
};

function onlyOneWord(array) {
  return array.filter(element => !element.includes(' '));
};

function positiveRowsOnly(array) {
  return array.filter(element => element.every(elem => elem > 0));
};

function allSameVowels(array) {
  return array.filter(checkStringForDuplicateVowels);

  function checkStringForDuplicateVowels(str) {
    let vowels = ['a','e','i','o','u'];
    let found = '';

    for (var i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        if (found === str[i] || found === '') {
          found = str[i];
        } else {
          return false;
        }
      }
    }

    return true;
  }
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
