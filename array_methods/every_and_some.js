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
];

// some. Вернул true поскольку есть хоть один активный пользователь
const isSomeActive = _.some(users, function (user) {
  return user.isActive === true;
});

console.log("isSomeActive", isSomeActive);

// some с сахаром. Вернул true поскольку есть хоть один активный пользователь. В синтаксическом сахаре не работает условия, для этого необходимо писать функцию.
const isSomeActive2 = _.some(users, { isActive: true, likes: 110 });
console.log("isSomeActive2", isSomeActive2);

// every. Вернул true поскольку не все пользователи активны
const isAllActive = _.every(users, function (user) {
  return user.isActive === true;
});

console.log("isAllActive", isAllActive);

// some. Вернул true поскольку есть хоть один активный пользователь
