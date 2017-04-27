function sum (array) {
  return array.reduce((acc, val) => acc + val);
};

function productAll (array) {
  // let newArr = [];
  // for (let i = 0; i < array.length; i++) {
  //   newArr.push(array[i].reduce((acc, val) => acc * val));
  // }
  // return newArr.reduce((acc, val) => acc * val);
  return array.reduce((acc, val) => {
    return val.reduce((a, b) => {
      return a * b;
    });
  }, 0);
};

function objectify (array) {
  return array.reduce((acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  }, {});
};

function luckyNumbers (array) {
  return array.reduce((acc, val) => {
    if (val === array[array.length - 1]) {
      return acc + 'and ' + val;
    } else {
      return acc + val + ', ';
    }
  }, 'Your lucky numbers are: ')
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
