const _ = require("lodash");

const users = [
  {
    id: 1,
    name: "mike",
    isActive: true,
  },
  {
    id: 2,
    name: "mike",
    isActive: true,
  },
  {
    id: 3,
    name: "lay",
    isActive: false,
  },
  {
    id: 4,
    name: "teodor",
    isActive: false,
  },
];

const result1 = _.find(users, function (user) {
  return user.name === "mike";
});

console.log("result1", result1);
