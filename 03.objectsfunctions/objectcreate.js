///////////////////////////////////////
// OBJECT CREATE

// Object.create differs from Function Constructor we build 
// an object that inherits directly from the one we pass in the 1st argument

// Helps build complex inheritance structures
// Here we directly specify which object should be a prototype
var personProto = {
    calc: function() {
        console.log(2016 - this.yob);
    }
}

// 1st way 
var om = Object.create(personProto);
om.name = "Om";
om.yob = 1996;
om.job = "Developer";

console.log(om);
om.calc();


// 2nd way 
var hari = Object.create(personProto, {
    name: { value: "Hari" },
    yob: { value: 1996 },
    job: { value: "Manager" }
});

console.log(hari.name);



///////////////////////////////////////
// FIRST class FUNCTIONS

/*
var years = [1990, 2021, 1821, 1210];
passing this function as an argument

function calc(el) {
    return 2021 - el;
}

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i=0; i<arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    console.log(arrRes);
}

arrayCalc([2021, 1996, 1981, 1821, 1775], calc);
*/

/*
function returning function
*/
function interviewQues(job) {
    if (job === "teacher") {
        return function(name) {
            console.log("What do you teach, " + name + "?");
        }
    } else if (job === "developer") {
        return function(name) {
            console.log("What tech stack are you comfortable with, " + name + "?");
        }
    } else {
        return function(name) {
            console.log("What do you do, " + name + "?");
        }
    }
}

// functions in JS are objects hence we can also return them
// 1st way
var devInterview = interviewQues("developer");
devInterview("Om");

// 2nd way
interviewQues("teacher")("Jane");



///////////////////////////////////////
// IIFE

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// passing parameters to an IIFE
(function(name) {
    console.log("Hi there, my name is " + name);
})("Om");



///////////////////////////////////////
// CLOSURES
function retire(retirementAge) {
    var a = " years left for retirement";

    // pay attention, once a function returns the EC is popped from the call stack and is destroyed 
    // but "a" message gets printed along with the age
    // this is possible using CLOSURES 
    // An inner function has access to the variables and parameters of the outer function
    // even when its OUTER function has returned 

    // NOTE: This is possible because - scope chain always stays intact
    // the interviewQuestion function also uses the convept of CLOSURES 
    return function(yob) {
        var age = 2021 - yob;
        console.log("Your age is ", age);
        console.log(retirementAge - age, a);
    }
}

// op: 35  years left for retirement
retire(60)(1996);



///////////////////////////////////////
// CALL, APPLY and BIND
// they help us call a function and set THIS variable manually
var om = {
    name: "Om",
    age: 25,
    job: "Developer",
    presentation: function(style, time) {
        if (style === "formal") {
            console.log("Good " + time + "! I am " + this.name + ".");
        } else if (style === "casual") {
            console.log("Hey there!" + " I am " + this.name + ". Have a nice " + time + "...");
        }
    }
};

om.presentation("casual", "Evening");

var hari = {
    name: "Hari",
    age: 29,
    job: "Manager"
};

// if we want to use presentation method on hari, we can't do this normally 

// ** CALL 
om.presentation.call(hari, "formal", "Morning");

// ** APPLY 
om.presentation.apply(hari, ["formal", "Morning"]);

// ** BIND 
// doesn't immediately call the function but store it somewhere so that we can call it sometime else 
// with preset arguments 

// we are passing only passing "style"
var hariCasual = om.presentation.bind(hari, "casual");
// bind creates a copy of the function so that we can use it sometime or somewhere else 
hariCasual("Evening");

// NOTE: Above mechanism is called CARRYING. We create a function based on another function 
//  with some preset parameters
// another example 
var hariFormal = om.presentation.bind(hari, "formal");
hariFormal("Afternoon");

// Another example 
var years = [1990, 1965, 1937, 2005, 1998];

function calc(el) {
    return 2021 - el;
}

function isFullAge(limit, el) {
    return el >= limit; 
}

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i=0; i<arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

var ages = arrayCalc(years, calc);
// what if another country has different age limit to become an adult
var fullJapan = arrayCalc(ages, isFullAge(this, 20));
console.log(ages);
console.log(fullJapan);












