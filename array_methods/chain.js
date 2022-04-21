const _ = require("lodash");

const users = [
  {
    id: 1,
    name: "John",
    isActive: true,
    age: 32,
  },
  {
    id: 2,
    name: "Jack",
    isActive: true,
    age: 28,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 37,
  },
];

// create chain in lodash methods
const getYoungestUserMessage = function (users) {
  const activeUsers = _.filter(users, "isActive");
  const sortedActiveUsers = _.orderBy(activeUsers, ["age"]);
  const firstUser = sortedActiveUsers[0];

  return firstUser.name + " это " + firstUser.age;
};

const result1 = getYoungestUserMessage(users);
console.log("result1: ", result1);

// review code who is stand in high for chain method
const getYoungestUserMessageWithChain = function (users) {
  return _.chain(users)
    .filter("isActive")
    .orderBy(["age"])
    .map(function (user) {
      return user.name + " это " + user.age;
    })
    .head()
    .value();
};

const result2 = getYoungestUserMessageWithChain(users);
console.log("result2: ", result2);
