//////////////////////////////////////////////////////
// CALL

/* With apply/call, you can write a method once, and then inherit it in another object, 
  without having to rewrite the method for the new object. We can borrow a function from other objects
  and use it with data of some other objects */

// let om = {
//   firstName: "Om",
//   lastName: "Balapure",
//   printFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// om.printFullName();

let hari = {
  firstName: "Hari",
  lastName: "Balapure",
};

// Instead of copying printFullName() in "hari" we can use function borrowing
// We can borrow this method from "om"
// OP: Hari Balapure
// om.printFullName.call(hari);

// We can also keep printFullName outside "om" and use it
// let printFullName = function () {
//   console.log(this.firstName + " " + this.lastName);
// }

/* call makes it possible to borrow methods from inside/outside of any object
  We pass [ reference to the "this" variables, comma separated parameters ] */
// printFullName.call(hari);


// Passing additional parameters
let printFullName = function (city, state) {
  console.log(this.firstName + " " + this.lastName + " lives in " + city + ", " + state);
}

// NOTE: You can pass as many arguments you want as comma separated values
printFullName.call(hari, "Wardha", "Maharashtra");



//////////////////////////////////////////////////////
// APPLY

/**
 * NOTE: The only difference b/w call and apply is that
 *  we pass arguments as an array instead of comma separated values
 */
printFullName.apply(hari, [ "Wardha", "Maharashtra" ]);



//////////////////////////////////////////////////////
// BIND

/**
 * NOTE: bind is different as it does not call the function immediately 
 *  instead it creates copy OR returns a function so that we can call it later
 */
let printName = printFullName.bind(hari, "Wardha", "Maharashtra");
printName();