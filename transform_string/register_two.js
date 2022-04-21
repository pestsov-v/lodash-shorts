const _ = require("lodash");
const string = "One string";

// lodash camel case
const LodashCamelCase = _.camelCase(string);
console.log("LodashCamelCase", LodashCamelCase);

// lodash snake case
const LodashSnakeCase = _.snakeCase(string);
console.log("LodashSnakeCase", LodashSnakeCase);
