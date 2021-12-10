//////////////////////////////////////////
// FUNCTIONS (FIRST CLASS CITIZENS)

/* Function declaration/statement */
function x() {

}


/* Function expression */
const y = function () {

}


/* Anonymous functions */
// Used in places where functions are used as values

// Named function expression
const z = function abc() {
  console.log(abc);
  console.log("Named function expression");
}

z();


/* Parameters and arguments */
//         These are paramerers
function a(param1, param2) {
  console.log(param1, param2);
} 

// These are arguments
a(1, 2);


/* First class functions */
// Passing/returning functions from a function makes functions 
//    as first class citizens in JS
// OR 
// Ability to use functions as values
function def() {
  console.log("Function passed as argument");
}

const b = function(def) {
  def();
}

b(def);

