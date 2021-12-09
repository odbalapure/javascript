Function.prototype.mycall = function () {
  arguments[0].callFunction = this;
  
  const args = [];
  for (let i=1; i<arguments.length; i++) {
    args.push(arguments[i]);
  }

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
