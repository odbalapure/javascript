/////////////////////////////////////////////
// PROMISE

/* 
  A promise is an object that keeps track of whether a particular event has occurred
  or not. Mainly promises are used to handle asynchronous code. It is an alternative or
  we can say a solution to callback functions that leads to callback hell i.e. unmaintainable
  and unreadable code 
  
  A promise's function constructor takes 2 functions as arguments:
  - resolve: means the promise was fulfilled
  - reject: means the promise was not fulfilled

  A promise has 4 states:
  - Pending
  - Resolved
  - Rejected
  - Settled (neither resolved nor rejected)
*/

function sum(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Even number", num);
    } else {
      reject("Odd number", num);
    }
  });
}

sum(10)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
