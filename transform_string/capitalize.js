const _ = require("lodash");
const string = "one String check";

// js realization
function capitalize(string) {
  const lowerCaseString = _.toLower(string);
  const firstLetter = _.chain(lowerCaseString).head().toUpper().value();
  const tail = _.chain(lowerCaseString).tail().join("").value();
  return firstLetter + tail;
}

const jsCapitalize = capitalize(string);
console.log("jsCapitalize: ", jsCapitalize);

// lodash realization
const lodashCapitalize = _.capitalize(string);
console.log("lodashCapitalize: ", lodashCapitalize);
