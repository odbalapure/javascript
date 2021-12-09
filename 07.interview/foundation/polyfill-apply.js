// We have to borrow this function
function displayUser(state, country, method) {
  console.log("----- " + method + " -----");
  console.log("Name : ", this.name);
  console.log("Age : ", this.age);
  console.log("City : ", this.city);
  console.log("State : ", state);
  console.log("Country : ", country);
}

// Custom apply function
// Store it inside prototype
Function.prototype.myapply = function () {
  // NOTE: "arguments" is a reserved keyword in JS
  // "fn" is a property we are creating on arguments
  //    we can name it whatever we want to store the "this" (displayUser in this case)
  /* Get value of "this" */
  arguments[0].applyFunction = this;
  /* Get the parameters */
  arguments[0].applyFunction(...arguments[1]);
};

var user = {
  name: "John Stewart",
  age: "🙊",
  city: "Sanfrancisco",
};

displayUser.myapply(user, ["CA", "USA", "apply --> myapply"]);
