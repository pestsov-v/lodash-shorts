const _ = require("lodash");

// js random method
const jsRandom = Math.random();
console.log("jsRandom: ", jsRandom);

// custom random function
const customRandomFunction = function (to, from) {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

const customRandom = customRandomFunction(5, 3);
console.log("customRandom: ", customRandom);

// lodash random method with 0 to 1
const lodashRandom = _.random();
console.log("lodashRandom: ", lodashRandom);

// lodash random method with 2 to 5
const lodashRandom2 = _.random(2, 5);
console.log("lodashRandom2: ", lodashRandom2);
