// let and const are hoisted but such variables are not initialized
// Error thrown => ReferenceError: Cannot access 'name' before initialization
// unlike var which is initialized to undefined

// each tab is called a window and an object is associated with it
// also called as global object 

function x() {
    var something = "Something";
    console.log(something);
}

// value is "undefined" as something is NOT part of the window object
console.log(`Something: ${window.something}`);

let myName = "Om";
// the value is still "undefined"
// let and const are blocked scope, var is function scoped
// NOTE: let does not get into window (GLOBAL scope)
console.log(`Name: ${window.myName}`);

var obj = { x: 2 };
// value is "undefined" NOT an error 
console.log(`obj: ${obj.y}`);
