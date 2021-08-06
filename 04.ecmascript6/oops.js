////////////////////////////////////
// CLASSES

// ES5 
var Person5 = function(name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
}

Person5.prototype.caclAge = function() {
    var age = new Date().getFullYear() - this.yob;
    console.log("Age:", age);
}

var om5 = new Person5("Om", 1996, "Developer");
om5.caclAge();


// ES6 
class Person6 {
    constructor(name, yob, job) {
        this.name = name;
        this.yob = yob;
        this.job = job;
    }

    // object method
    caclAge() {
        let age = new Date().getFullYear() - this.yob;
        console.log("Age:", age);
    }

    // we can create static methods like in Java
    static hello() {
        console.log("Hello there");
    }
}

var om6 = new Person6("Om", 1996, "Developer");
om6.caclAge();
Person6.hello();



////////////////////////////////////
// SUB CLASSING

// ES5 
var Employee5 = function(name, yob, job, company, exp) {
    // inheriting a class the ES5 way
    Person5.call(this, name, yob, job);
    this.company = company;
    this.exp = exp;
}

// object.create allows us to set the prototype 
Employee5.prototype = Object.create(Person5.prototype);
var omEmployee5 = new Employee5("Om", 1996, "Developer", "Stratus", 2);
console.log(omEmployee5);
omEmployee5.caclAge();

// ES6 
class Employee6 extends Person6 {
    constructor(name, yob, job, company, exp) {
        super(name, yob, job);
        this.company = company;
        this.exp = exp;
    }

    employeeDescription() {
        console.log(`${this.name} has ${this.exp} yrs of experience`);
    }
}

const omEmployee6 = new Employee6("Om", 1996, "Developer", "Stratus", 2);
omEmployee6.employeeDescription();
omEmployee6.caclAge();