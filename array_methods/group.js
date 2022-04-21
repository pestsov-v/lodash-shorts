const _ = require("lodash");

const users = [
  {
    id: 1,
    name: "John",
    isActive: true,
    likes: 110,
  },
  {
    id: 2,
    name: "Jack",
    isActive: false,
    likes: 30,
  },
  {
    id: 2,
    name: "Mike",
    isActive: false,
    likes: 45,
  },
];

// javascript function
const groupBy = function (list, prop) {
  return list.reduce(function (aggregator, element) {
    console.log("aggregator", aggregator);
    console.log("element", element);
    console.log("element[prop]", element[prop]);
    console.log("aggregator[element[prop]]", aggregator[element[prop]]);
    (aggregator[element[prop]] = aggregator[element[prop]] || []).push(element);
    return aggregator;
  }, {});
};

const result1 = groupBy(users, "isActive");
console.log("result1", result1);

// groupBy lodash
const result2 = _.groupBy(users, "isActive");
console.log("result2", result2);

// groupBy lodash with function
const result3 = _.groupBy(users, function (user) {
  return user.likes;
});
console.log("result3", result3);
