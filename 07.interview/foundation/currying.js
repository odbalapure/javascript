///////////////////////////////////////
// CURRYING

/**
 * Currying lets us create a function using some other function
 *  by presetting some values like "3"
 *
 * Currying can be achieved using:
 * - Bind method
 * - Closures
 */

let multiplyBind = function (x, y) {
  console.log(x * y);
};

/* Currying using BIND */

// y is 3
let multiplyByTwo = multiplyBind.bind(this, 3);
// 2 is x
multiplyByTwo(2);

/* Currying using CLOSURES */
let multiplyClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

multiplyClosure(2)(3);

// OR do this

let multiplyByThree = multiplyClosure(2);
multiplyByThree(3);