////////////////////////////////////////////
// PROTOTYPES

let arr = ["Om", "Hari"];

let om = {
  name: "Om Balapure",
  city: "Wardha",
  getName: function () {
    return this.name + " lives in " + this.city;
  },
};

// Now if we access om.name, it prints the value inside name
// Similarly for arrays there are some methods like slice, splice, length etc
// So such methods are made available thru prototype
// JS attaches some properties (objects) to the objects we create automatically

let hari = {
  name: "Hari Balapure",
};

hari.__proto__ = om;
// Now "hari" will have access to all properties/methods of "om"
console.log(hari.getName());


/* Attaching functions to prototype */
Function.prototype.myFun = function () {
  console.log("My function!");
}

function fun() {

}

// { myFun: [Function (anonymous)] }
console.log(fun.__proto__);
console.log(fun.myFun());