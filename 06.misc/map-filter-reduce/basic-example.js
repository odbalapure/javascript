/* MAP */
// map is a higher order function that transforms an array 
const arr = [5,1,3,2,6];

function binary(num) {
  return num.toString(2);
}

const binaryOp = arr.map(binary);
console.log(binaryOp);


/* FILTER */
// filter is used to filter out some values in an array
function isEven(num) {
  return num % 2 === 0;
}

const evenOp = arr.filter(isEven);
// No need to use "return" if the arrow function has only one line
const oddOp = arr.filter((num) => num % 2 !== 0);
console.log(evenOp);
console.log(oddOp);


/* REDUCE */
// Returns a single value as a result
const sumOp = arr.reduce(function (acc, curr) {
  // acc means an Accumalator
  // curr means Curren element
  acc += curr;
  return acc;
  // 0 is nothing but setting initial value of "acc"
}, 0);

console.log(sumOp);

const maxOp = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  
  return max;
}, 0);

console.log(maxOp);