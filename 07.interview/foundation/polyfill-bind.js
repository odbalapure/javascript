///////////////////////////////////
// POLLYFILL

/**
 * In case if a browser does not support a bind function
 *  we have to define our own bind function
 * It is sort of a fallback mechanism
 */


//////////////////////////////////////////
// IMPLEMENTATION 1

// let hari = {
//   firstName: "Hari",
//   lastName: "Balapure",
// };

// let printFullName = function (city) {
//   console.log(`${this.firstName} ${this.lastName} lives in ${city}`);
// };

// let printMyName = printFullName.bind(hari);
// printMyName();

/* Creating our own "bind" method */
// Function.prototype.mybind = function (...args) {
//   let obj = this;

//   return function() {
//     obj.call(args[0])
//   }
// };

// let printMyName = printFullName.mybind(hari, "Wardha");
// printMyName();



//////////////////////////////////////////
// IMPLEMENTATION 2

// NOTE: The above method won't work if we pass additional parameters except the "this"
// Function.prototype.mybind = function (...args) {
//   let obj = this,
//     params = args.slice(1);
//   console.log("Params:", params);

//   return function () {
//     // slice returns an array, so we have to use "apply" instead of "call"
//     obj.apply(args[0], params);
//   };
// };

// let om = {
//   firstName: "Om",
//   lastName: "Balapure",
// };

// let printMyName = printFullName.mybind(om, "Wardha");
// printMyName("Mahrashtra");


//////////////////////////////////////////
// IMPLEMENTATION 3

let printFullName = function (city, state, country) {
  console.log(`${this.firstName} ${this.lastName} lives in ${city}, ${state}, ${country}`);
};

// The above implementation wont work if the inner function is passed some values as well
// Eg: printFullName.mybind(om, "Wardha")("Something");
Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);

  return function (...innerArgs) {
    // slice returns an array, so we have to use "apply" instead of "call"
    // We also need to consider the arguments passed to the inner function as well
    //   otherwise the value will be "undefined"
    obj.apply(args[0], [params, ...innerArgs]);
  };
};

let om = {
  firstName: "Om",
  lastName: "Balapure",
};

let printMyName = printFullName.mybind(om, "Wardha");
printMyName("Mahrashtra", "India");
