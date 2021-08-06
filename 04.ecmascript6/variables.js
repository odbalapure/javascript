////////////////////////////////////
// LET CONST


// ES5 
var name5 = "Om Balapure";
var age5 = 25;
name5 = "Omi Balapure";

// ES6 
// const variables are immutable, error will be thrown if we try to change
// its content
// NOTE: They are block scoped
const name6 = "Om Balapure";
// name6 = "Om D. Balpure";
console.log(name6);

// let variables are mutable and are also block scoped



////////////////////////////////////
// BLOCKS and IIFE
// blocks are not just loops and conditionals 
// a block can also be like this
{
    const a = 1;
    let b = 2;
}

// NOTE: var is function scoped
(function() {
    var x = 10;
})();


////////////////////////////////////
// STRINGS

// template literals
console.log(`${name5} is ${age5} years old...`);

// all methods are case sensitive
console.log(name5.startsWith("O"));
console.log(name5.endsWith("e"));
console.log(name5.includes("Om"));

// print strings multiple times
console.log(name5.repeat(5));


////////////////////////////////////
// ARROW FUNCTIONS

var years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2021 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2021 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age of ${index + 1}: ${2021 - el}.`);
console.log(ages6);

// we must use curly braces if there are multiple lines of code inside an arrow function
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age of ${index + 1}: ${age}.`;
});
console.log(ages6); 

 
// Arrow functions and Lexical THIS keyword
var box5 = {
    color: "green",
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector(".green").addEventListener("click", function() {
            var str = "This is box number " + self.position + " and it is " + self.color;
            alert(str);
        });
    }
};
// op: This is box number undefined and it is undefined
// the reason is the call back function the eventlistener is a FUNCTION function
// and the TYPICAL function's THIS points to the window object
// color and position are not part of the window object
box5.clickMe();

var box6 = {
    color: "blue",
    position: 2,
    clickMe: function() {
        document.querySelector(".blue").addEventListener("click", () => {
            var str = "This is box number " + this.position + " and it is " + this.color;
            alert(str);
        });
    }
};
box6.clickMe();


function Person(name) {
    this.name = name;
}

Person.prototype.myFreinds5 = function(friends) {
    
};








