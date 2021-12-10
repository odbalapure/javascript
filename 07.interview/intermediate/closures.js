////////////////////////////////////////////
// CLOSURES & SETTIMEOUT

function x() {
  // Using var i = 1 will print only 6 on the screen
  // Use let i = 1 to print the sequence from 1 to 5
  /* NOTE: This happens due to closures, for var i = 1 the reference of "i" is remembered
    and in case of let i = 1 copy of "i" is created instead of remembering the reference of "i" (var i = 1) in each iteration */
  /* for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  } */

  /* for (var i=1; i<=5; i++) {
    function close(i) {
      setTimeout(function() {
        console.log(i);
      }, i * 1000);
    }

    close(i);
  } */

  console.log("Hello...");
}

// The above code prints no. from 1 - 5
x();

/* 
ADVANTAGES:
- Module pattern
- Function currying
- Used in higher order functions - memoize and once
- Data hiding and encapsulation
*/



////////////////////////////////////////////
// CLOSURES & DATA HIDING
// Anyone can use "counter" if placed here
// var counter = 0;

/* Instead wrap counter and increaseCounter() inside a function */
function counter() {
  var counter = 0;
  function increaseCounter() {
    counter++;
    console.log("Counter:", counter);
  }

  return increaseCounter;
}

var counter1 = counter();
counter1();
counter1();

// If you do this again, counter2 is independent of counter1
//    and a closure will be created again and hence will start from 1,2...so on
var counter2 = counter();
counter2();
counter2();



/////////////////////////////////////////////
// SCALABILITY

/* Creating closure with a constructor function */
function Counter() {
  var counter = 0;
  
  this.increaseCounter = function() {
    counter++;
    console.log("Counter:", counter);
  }

  this.decreaseCounter = function() {
    counter--;
    console.log("Counter:", counter);
  }
}

var counter3 = new Counter();
counter3.increaseCounter();
counter3.decreaseCounter();

/* 
DISADVANTAGES:
- Over consumption of memory as copies of variables are created and not garbage collected, till the program expires
- Memory leaks (see above point)
*/



/////////////////////////////////////////////
// GARBAGE COLLECTOR
/*
- JS is a high level language, for C and C++ a developer is responsible to allocate and deallocate memory
- When there are some unused variables, the memory for such variables is freed up
*/



/////////////////////////////////////////////
// GC & CLOSURE RELATION:

function hello(name) {
  // Newer JS engines have intelligent GCs, in this case "greet" won't be removed from the memory 
  //    but "question" will be, as it unused.
  /* NOTE: Put a debugger on the inner function and try to access "question" from
      the console, you will get an error saying ReferenceError. This proves that "question" was garbage collected */
  var greet = "Hello", question = "How are you?";
  return function () {
    console.log(`${greet} ${name}!`);
  } 
}

hello("Omi")();