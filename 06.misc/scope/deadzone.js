//////////////////////////////////
// DEAD ZONE 

// "let" and "const" declarations are HOISTED but they are 
// in the Temporal Dead Zone for time being 
let a = 10;
console.log(`b: ${b}`);
var b = 20;
 
// Temporal Dead Zone: the time since when the LET variable was hoisted till it is initialized some value
// using "a" before declaring it says -- ReferenceError: Cannot access 'a' before initialization 




///////////////////////////////////
// SYNTAX ERROR 
// declaring "a" again will give a syntax error, wheher var or const
// let a = 10;

// NOTE: in case of a "var" there is no error thrown
// in case of a let/const there will be an error thrown -- SyntaxError: Identifier 'b' has already been declare
let b = 200;



///////////////////////////////////
// DECLARATION AND ASSIGNNMENT
let something;

// you can declare "let" or "var" variable and then initialize them somewhere 
// NOTE: "const" is strict, it does not allow this
something = "something";
// following error will be thrown if you try to do so -- TypeError: Missing Initializer in const declaration  
// we must initialize a "const" variable when you declare it 



///////////////////////////////////
// ERRORS

// TypeError: re-assingment to a const variable 
// SyntaxError: re-declaration of same variable (except "var")
// ReferenceError: accessing variables even before initializing (except "var")
