const _ = require("lodash");

// pull
const arr = [1, 2, 3];
const result1 = _.pull(arr, 1);
console.log("result1: ", result1);

// without
const arr1 = [1, 2, 3];
const result2 = _.without(arr1, 1);
console.log("result2: ", result2);

// remove
const arr2 = [{ id: 1 }, { id: 2 }];
const result3 = _.remove(arr2, function (item) {
  return item.id === 1;
});
console.log("result3: ", result3);

// reject
const arr3 = [{ id: 1 }, { id: 2 }];
const result4 = _.reject(arr3, function (item) {
  return item.id === 1;
});
console.log("result4: ", result4);

// reject с сахаром
const result5 = _.reject(arr3, ["id", 1]);
console.log("result5: ", result5);

// пример с reject

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
];

// with reject
function getPopularUsers(users) {
  return _.reject(users, function (user) {
    if (!user.isActive || user.likes < 100) {
      return user;
    }
  });
}

const result6 = getPopularUsers(users);
console.log("result6: ", result6);

// with filter
function getPopularUsers(users) {
  return _.filter(users, function (user) {
    return user.isActive && user.likes > 100;
  });
}

const result7 = getPopularUsers(users);
console.log("result7: ", result7);
