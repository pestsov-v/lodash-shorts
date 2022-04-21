const _ = require("lodash");

const users = [
  {
    id: 2,
    name: "Jack",
    isActive: false,
    likes: 30,
  },
  {
    id: 1,
    name: "John",
    isActive: true,
    likes: 110,
  },
];

// javascript cортировка. Сортировка по лайкам по убыванию
const result1 = users.sort(function (user1, user2) {
  return user1.likes > user2.likes ? -1 : 1;
});

console.log("result1", result1);

// lodash сортировка. Сортировка по лайкам по возрастанию, она является по умолчанию
const result2 = _.orderBy(users, ["likes"]);
console.log("result2", result2);

// lodash сортировка. Сортировка по лайкам по убыванию
const result3 = _.orderBy(users, ["likes"], ["desc"]);
console.log("result3", result3);

// lodash сортировка. Сортировка по лайкам по возрастанию лайков и убыванию имён
const result4 = _.orderBy(users, ["likes", "name"], ["asc", "desc"]);
console.log("result4", result4);
