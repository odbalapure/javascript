// The arguments object is a local variable available
//  within all non-arrow functions. You can refer to a function's arguments inside that function by using its arguments object.
// It has entries for each argument the function was called with, with the first entry's index at 0 .
Function.prototype.mycall = function () {
  // Step 1: Make displayUser() a property of "user" object, arguments[0] is "user" object
  //  "this" will be the displayUser() method
  arguments[0].callFunction = this;

  // Step 2: Extract all the parameters except the "this", so start from i=1
  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  // Step 3: Call callFunction() with the extracted arguments except the "this"
  arguments[0].callFunction(...args);
};

function displayUser(state, country, method) {
  console.log("----- " + method + " -----");
  console.log("Name : ", this.name);
  console.log("Age : ", this.age);
  console.log("City : ", this.city);
  console.log("State : ", state);
  console.log("Country : ", country);
}

var user = {
  name: "John Stewart",
  age: "🙊",
  city: "Sanfrancisco",
};

displayUser.mycall(user, "CA", "USA", "call --> mycall");
