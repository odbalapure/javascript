//////////////////////////////////////////////////////////////
// GENERATOR FUNCTIONS

/**
 * Syntax:
 * function* <function-name> () {
 *  // Code
 * }
 *
 * In normal functions when the "return" statement is encountered the execution of that function terminates
 * Generator functions don't just return a single value instead they return a "Generator" object which looks like "{ value: 0, done: false }"
 * "Generator" object has a method called "next()" which executes the code until the nearest "yield" statement and returns a yield value
 */

function* iteratorFunc() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
    count++;
    yield i;
  }

  // NOTE: If the code does not reach the "return" statement the value of
  // "value" will remain as "undefined"
  return count;
}

let itr = iteratorFunc();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

// A much more simple example:
/* function* test() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const t = test();
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
 */
