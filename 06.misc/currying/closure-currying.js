// Currying using Closures

// 1st way
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  }
};
multiply(2)(3);

// 2nd way
let multiply1 = multiply(2);
multiply1(3);