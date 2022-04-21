const _ = require("lodash");
// Нативный map
const newArray = [1, 2, 3].map(function (item) {
  return item;
});

console.log("newArray", newArray);

// lodash map
const lodashArray = _.map([1, 2, 3], function (item) {
  return item;
});

console.log("lodashArray", lodashArray);

// порлучить массив id
const users = [
  {
    id: 101,
    name: "User 1",
  },
  {
    id: 102,
    name: "User 2",
  },
  {
    id: 103,
    name: "User 3",
  },
  {
    id: 104,
    name: "User 4",
  },
];

const ids = _.map(users, function (item) {
  return item.id;
});

console.log("ids", ids);

// синтаксический сахар
const syntaxSugar = _.map(users, "id");
console.log("syntaxSugar: ", syntaxSugar);

// получить массив из объекта:
const usersObj = {
  101: {
    name: "User 1",
  },
  102: {
    name: "User 2",
  },
  103: {
    name: "User 3",
  },
  104: {
    name: "User 4",
  },
};

const userObjArray = _.map(usersObj, function (user, key) {
  return Number(key);
});

console.log("userObjArray: ", userObjArray);
