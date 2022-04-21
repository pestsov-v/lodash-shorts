const _ = require("lodash");

[1, 2].forEach(function (item) {
  console.log("javascript: ", item);
});

_.each([1, 2], function (item) {
  console.log("lodash: ", item);
});

_.each([1, 2], function (item, index) {
  console.log("lodash: ", item, index);
});

// Each можно вызывать на объекты, в отличии от чистого javascript
const products = {
  1: {
    name: "Product 1",
  },
  2: {
    name: "Product 2",
  },
};

_.each(products, function (product) {
  console.log(product);
});

_.each(products, function (product, key) {
  console.log(product, key);
});

// Пример когда мы хотим прочитать определенное поле из объекта и запушить их в массив
const array = [];
_.each(products, function (product) {
  console.log(product.name);
  const fullArray = array.push(product.name);
  console.log(fullArray);
});

console.log(array);
