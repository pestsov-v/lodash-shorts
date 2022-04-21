const _ = require("lodash");
const string = "OneString";

//TO_LOWER_CASE
// js lower case
const jsLowerCase = string.toLowerCase();
console.log("jsLowerCase: ", jsLowerCase);

// lodash lower case
const lodashLowerCase = _.toLower(string);
console.log("lodashLowerCase: ", lodashLowerCase);

// ~ with chain
const lodashLowerCaseChain = _.chain(string).toLower().value();
console.log("lodashLowerCaseChain: ", lodashLowerCaseChain);

//TO_UPPER_CASE
// js upper case
const jsUpperCase = string.toUpperCase();
console.log("jsUpperCase: ", jsUpperCase);

// lodash upper case
const lodashUpperCase = _.toUpper(string);
console.log("lodashUpperCase: ", lodashUpperCase);

// ~ with chain
const lodashUpperCaseChain = _.chain(string).toUpper().value();
console.log("lodashUpperCaseChain: ", lodashUpperCaseChain);
