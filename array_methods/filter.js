const _ = require("lodash");

// нативный js.
const filter1 = _.filter([1, 2, 3, 4, 5], function (item) {
  return item > 3;
});

console.log("filter1", filter1);

//

const users = [
  {
    id: 1,
    name: "john",
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

const filter2 = _.filter(users, function (users) {
  return users.name === "john";
});

console.log("filter2", filter2);

// с использованием синтаксического сахара. Вернёт все элементы,у которых isActive = true
const filter3 = _.filter(users, "isActive");
console.log("filter3", filter3);

// Если нужно написать, что что-то чему-то равняется, например имя, то нужно написать
//массив с первым элементом - указывается поле, а вторым условие
const filter4 = _.filter(users, ["name", "john"]);
console.log("filter4", filter4);

// работа с объектами
const products = {
  101: {
    name: "tomato",
    price: 100,
  },
  102: {
    name: "cucember",
    price: 200,
  },
  103: {
    name: "potato",
    price: 300,
  },
};

const filter5 = _.filter(products, function (product) {
  return product.price > 100;
});
// при этом на выходе получаем массив
console.log("filter5", filter5);

//

const products2 = [
  {
    id: 1,
    name: "milk",
    price: "2",
  },
  {
    id: 2,
    name: "bread",
    price: "1",
  },
  {
    id: 3,
    name: "meat",
    price: "3",
  },
];

// с использованием базового инклюд
function searchProduct(products2, searchValue) {
  return _.filter(products2, function (product) {
    const hasValue = product.name;
    return hasValue.includes(searchValue);
  });
}

const result1 = searchProduct(products2, "milk");

console.log("result1", result1);

// с использованием лодашевского инклюд
function searchProduct(products2, searchValue) {
  return _.filter(products2, function (product) {
    const hasValue = product.name;
    return _.includes(hasValue, searchValue);
  });
}

const result2 = searchProduct(products2, "ea");
console.log("result2", result2);


