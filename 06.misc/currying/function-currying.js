// Currying using bind method

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyBy1 = multiply.bind(this, 2);
multiplyBy1(5);

let multiplyBy2 = multiply.bind(this, 2, 3);
multiplyBy2();

let multiplyBy3 = multiply.bind(this);
multiplyBy3(2, 3);

