const _ = require("lodash");

const state = {
  isLoading: false,
  data: null,
  error: null,
};

// js
const newState = Object.assign({}, state, { isLoading: true });
console.log("newState", newState);

// lodash
const newState2 = _.assign({}, state, { isLoading: true });
console.log("newState2", newState2);
