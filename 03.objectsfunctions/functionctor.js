///////////////////////////////////////
// FUNCTION CONSTRUCTOR 

// In JS inheritance is achieved through prototypes and prototype chaining
// Every JS object has a PROTOTYPE property. This will store the properties and methods that 
// we want to inherit 

// most popular way of creating objects in JS is FUNCTION CONSTRUCTOR
var Person = function(name, yob, job) {
    // properties
    this.name = name;
    this.yob = yob;
    this.job = job;

    // methods
    // this.calcAge = function() {
    //     console.log(2021 - this.yob);
    // }
}  

// instead of keeping this method in the function constructor
// we store it in the prototype
Person.prototype.calcAge = function() {
    console.log(2021 - this.yob);
}

// we can also store properties inside the prototype 
Person.prototype.company = "Stratus";

// now creating objects from the above FUNCTION CONSTRUCTOR
var om = new Person("Om", 1996, "Developer");
om.calcAge();
console.log(om.company);

var hari = new Person("Hari", 1992, "Manager");
hari.calcAge();
console.log(hari.company);

console.info(om);