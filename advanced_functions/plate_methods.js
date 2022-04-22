const _ = require("lodash");

const numbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const resul1 = _.flatten(numbers);
console.log("resul1: ", resul1);

const numbersDeep = [
  [1, 2],
  [3, [4]],
  [5, 6],
];

const resul2 = _.flattenDeep(numbersDeep);
console.log("resul2: ", resul2);
