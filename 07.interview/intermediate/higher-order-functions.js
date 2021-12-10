//////////////////////////////////////////////
// HIGHER ORDER FUNCTIONS

/* A function that takes another function as an argument OR returns a function is called as a Higher Order function
    and the function passed to the Higher Order function is nothing but the Callback Function */

const radius = [1, 2, 3, 4];

const calculateArea = function(radius) {
  const op = [];
  for (let i=0;i <radius.length; i++) {
    op.push(Math.PI * radius[i] * radius[i]);
  }

  return op;
}

// Now what if you had to calulcate the circumference of the circle
// Again we can write a function similar to calculateArea()
const calculateCircum = function(radius) {
  const op = [];
  for (let i=0;i <radius.length; i++) {
    op.push(2 * Math.PI * radius[i]);
  }

  return op;
}

// What if we want to find the diameter of passed radii, we have to do code duplication if we follow the same approach as above
// NOTE: 90% of the code in both the functions is same and the code is not modular

const area = function(radius) {
  return Math.PI * radius * radius;
}

const circumference = function(radius) {
  return 2 * Math.PI * radius;
}

const diameter = function(radius) {
  return 2 * radius;
}

// Example of higher order function (logic is a function)
const calculate = function(radius, logic) {
  const op = [];
  for (let i=0;i <radius.length; i++) {
    op.push(logic(radius[i]));
  }

  return op;
}

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// This is what map() does for eg:
// console.log(radius.map(area));

// To make our own custom "map" function (Polyfill for map()) we have to add it to Array's prototype
Array.prototype.mymap = function(logic) {
  const output = [];
  for (let i=0;i <this.length; i++) {
    output.push(logic(this[i]).toFixed(2));
  }

  return output;
}

console.log("CUSTOM MAP METHOD OUTPUT:");
/* NOTE: No need to pass 'radius' to mymap()
    As inside mymap, the THIS points to the array which is this mymap being called upon */
console.log(radius.mymap(area));