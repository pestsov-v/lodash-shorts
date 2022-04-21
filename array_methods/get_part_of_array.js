const _ = require("lodash");

const numbersArray = [1, 2, 3];
const string = "string";

// GET FIRST ELEMENT
// first element in basic javascript
const jsHead = numbersArray[0];
console.log("jsHead: ", jsHead);

// first element in lodash method
const lodashHead = _.head(numbersArray);
console.log("lodashHead: ", lodashHead);

// ~ with chain
const lodashHeadChain = _.chain(numbersArray).head().value();
console.log("lodashHeadChain: ", lodashHeadChain);

// head method with string
const lodashHeadChainString = _.chain(string).head().value();
console.log("lodashHeadChainString: ", lodashHeadChainString);

// GET ALL ELEMENTS WITHOUT FIRST ELEMENT
// all elements without first element in javascript
const jsTail = numbersArray.slice(1);
console.log("jsTail: ", jsTail);

// all elements without first element in lodash tail
const lodashTail = _.tail(numbersArray);
console.log("lodashTail: ", lodashTail);

// ~ with chain
const lodashTailChain = _.chain(numbersArray).tail().value();
console.log("lodashTailChain: ", lodashTailChain);

// tail method with string
const lodashTailChainString = _.chain(string).tail().join("").value();
console.log("lodashTailChainString: ", lodashTailChainString);

// GET LAST ELEMENT
// all elements without first element in javascript
const jsLast = numbersArray[numbersArray.length - 1];
console.log("jsLast: ", jsLast);

// all elements without first element in lodash tail
const lodashLast = _.last(numbersArray);
console.log("lodashLast: ", lodashLast);

// ~ with chain
const lodashLastChain = _.chain(numbersArray).last().value();
console.log("lodashLastChain: ", lodashLastChain);

// last method with string
const lodashLastChainString = _.chain(string).last().value();
console.log("lodashLastChainString: ", lodashLastChainString);

// GET ALL ELEMENT WITHOUT LAST ELEMENT
// all elements without last element in javascript
const jsInitial = numbersArray.slice(0, -1);
console.log("jsInitial: ", jsInitial);

// all elements without last element in lodash initial
const lodashInitial = _.initial(numbersArray);
console.log("lodashInitial: ", lodashInitial);

// ~ with chain
const lodashInitialChain = _.chain(numbersArray).initial().value();
console.log("lodashInitialChain: ", lodashInitialChain);

// initial method with string
const lodashInitialChainString = _.chain(string).initial().join("").value();
console.log("lodashInitialChainString: ", lodashInitialChainString);
