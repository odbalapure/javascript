////////////////////////////////////
// DESTRUCTURING

// var om = ["Om", 25];
// var name = om[0];
// var age = om[1];

// ES6
const [name, year] = ["Om", 26];
console.log(name);
console.log(year);

const obj = {
    firstName: "Om",
    lastName: "Balapure"
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// if you don't want the variable name to match 
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// returning multiple values from a function
function calcRetireAge(year) {
    const age = new Date().getFullYear() - year;
    return [age, 60 - age];
}

const [age, retirement] = calcRetireAge(1996);
console.log(age, retirement);

// REST with array destructuring
const [name, age=25, ...restValues] = ["Om", 25, "Developer", "M", {name: "Om", age: 25}];
// NOTE: REST can also process OBJECTS 
// op: Om 25 [ 'Developer', 'M', { name: 'Om', age: 25 } ]
console.log(name, age, restValues);

// Destructuring with objects
const students = [{ name: 'Om', age: 25 }, { name: 'Hari', age: 25 }];
// const doubleName = student => {
//     const {name} = student;
//     return name + name;
// };
const doubleName = ({name, age}) => {
    return name + age;
}
// op: ['Om25', 'Hari25']
console.log(students.map(doubleName));




////////////////////////////////////
// ARRAYS
// const boxes = document.querySelectorAll(".box"); 

// querySelectorAll does not return an arraylist but a NODE LIST
// so we need to transform it so as to transform or process it 

// ES5 
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(curr) {
//     curr.style.backgroundColor = "maroon";
// });

// ES6 
// var boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(curr => curr.style.backgroundColor = "yellow");

// for (const curr of boxesArr6) {
//     if (curr.className === "box blue") {
//         continue;
//     }
//     curr.textContent = "I changed to yellow";
// }


// Map
var ages = [12, 91, 25, 18, 10, 21];

// ES5
var full = ages.map(function(curr) {
    return curr >= 18;
});
// returns the index where the value is true
console.log("Index of: " + full.indexOf(true));
 
// ES6
console.log("Find Index: " + ages.findIndex(curr => curr >= 18));
console.log("Find: " + ages.find(curr => curr >= 18));


////////////////////////////////////
// SPREAD
// To pass multiple params we used to do this in ES5 
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var ages = [31, 18, 91, 21];
var sum5 = addFourAges.apply(null, ages);
console.log(sum5);

// ES6 way
var sum6 = addFourAges(...ages);
console.log(sum6);

// Concat two array 
const family1 = ["Om", "Hari"];
const family2 = ["Shivam", "Satyam"];

console.log(...family1, ...family2);

// NOTE: Spread operator also works on node list 
// const h = document.querySelector("h1");
// const boxes = document.querySelectorAll(".box");
// const all = [h, ...boxes];
// convert the node list to an array
// so that we can process it 
// Array.from(all).forEach(curr => {
//     curr.style.color = "purple";
// });



////////////////////////////////////
// REST PARAMETERS

// Allows to pass arbitrary no. of arguments to a function and used inside that function
// REST parameters are opposite of SPREAD even the syntax is similar

/*
// ES5 
function isFullAge5() {
    // arguments is a keyword 
    // console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments);
    argsArray.forEach(function(curr) {
        console.log((2021 - curr) >= 18);
    });
}
r
isFullAge5(1990, 1992, 1996, 2020, 2016);

// ES6
function isFullAge6(...years) {
    // as we call the function, the arguments will be transform them 
    // into an array and pass it to this function
    // console.log(years);
    years.forEach(curr => console.log((2021 - curr) >= 18));
}

isFullAge6(1990, 1992, 1996, 2020, 2016);
*/
// NOTE: 
// spread - used in function call
// rest - used in function declaration, to accept arbitrary no. of parameters

// passing additional parameters
// ES5 
function isFullAge5(limit) {
    var argsArray = Array.prototype.slice.call(arguments, 1);
    argsArray.forEach(function(curr) {
        console.log((2021 - curr) >= limit);
    });
}

// op: true false true
// 15 is the limit 
isFullAge5(15, 1990, 2007, 1965);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(curr => console.log((2021 - curr) >= limit));
}

isFullAge5(15, 1990, 2007, 1965);



////////////////////////////////////
// DEFAULT PARAMETERS

// ES5 
function OmPerson(firstName, lastName, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
}

// if we dont pass any one of the params the default value will be `undefined`
// we have 2 options 
// - add conditionals to assign some default value
// - or use `default parameters`
var om = new OmPerson("Om", "Balapure", "India");
console.log(om);

// ES6 
function HariPerson(firstName, lastName = "Balapure", country = "India") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
}

var hari = new HariPerson("Hari");
console.log(hari);



////////////////////////////////////
// MAPS 

const ques = new Map();
ques.set(1, "Maths");
ques.set(2, "Science");
ques.set(3, "History");
ques.set(4, "English");
ques.set(5, "Sanskrit");
ques.set("Male", true);

console.log(ques.get(2));
console.log(ques.has(3));
// ques.clear();
console.log(ques.size);

// iterate over a map 
ques.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

// destructuring 
for (let [key, value] of ques.entries()) {
    if (typeof(key) === "number") {
        console.log(`Key: ${key}, Value: ${value}`);
    }
}

// const subId = parseInt(prompt("Enter id of a subject"));
// console.log(ques.get(subId));


