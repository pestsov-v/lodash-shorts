const _ = require("lodash");
const string = "string";
const numbers = [1, 2, 3];

// SPLIT
// js split
const jsSplit = string.split("");
console.log("jsSplit: ", jsSplit);

// lodash split
const lodashSplit = _.split(string, "");
console.log("lodashSplit: ", lodashSplit);

// ~ with chain
const lodashSplitChain = _.chain(string).split("").value();
console.log("lodashSplitChain: ", lodashSplitChain);

// JOIN
// js join
const jsJoin = numbers.join("");
console.log("jsJoin: ", jsJoin);

// lodash join
const lodashJoin = _.join(numbers, "");
console.log("lodashJoin: ", lodashJoin);

// ~ with join
const lodashJoinChain = _.chain(numbers).join("").value();
console.log("lodashJoinChain: ", lodashJoinChain);
