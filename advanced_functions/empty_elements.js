const _ = require("lodash");

const elements = [2, "string", true, false, null, undefined, "else", 322, ""];

const result1 = _.compact(elements);
console.log("result1:", result1);

// ~ with filter
const result2 = elements.filter(Boolean);
console.log("resuilt2:", result2);
