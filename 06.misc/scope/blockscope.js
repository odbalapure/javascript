//////////////////////////////////
// BLOCK

// a block can be: 
{
    // also called Compound Statement
    // "block" groups multiple statements togehter
    // so that we can use it so that JS expects one statement
}

// declaring if like this will give a SyntaxError
// if (true) 
// here JS expects a single statement, so we write
if (true) {
    var a = 10;
    console.log(`a: ${a}`);
}



//////////////////////////////////
// BLOCK SCOPE 

// all the variables and functions we can acesss inside a BLOCK 
// it is called as BLOCK SCOPE
{
    var a = 10;
    let b = 20;
    const c = 30;
}

// if you run a debugger 'b' and 'c' will be shown under the "Block" section
// 'a' be under "Global" section 
// console.log(a);



//////////////////////////////////
// SHADOWING

var a = 100;
let b = 200;
{
    var a = 10;
    let b = 20;
    const c = 30;
    // if we print 'a' the value will be 10
    console.log(`a inside block: ${a}`);
    // value of 'b' will 20
    console.log(`b inside block: ${b}`);
}
// if you log 'a' now, 10 will be logged to the console again
// this happens because both the 'a's will be referring to same memory space 
console.log(`a outside block: ${a}`);
// this does not happen in case of let/const 
// the value of 'b' outside the block i.e. 200 will be printed
console.log(`b outside block: ${b}`);


// NOTE: the concept of SHADOWING is not just restricted to variables 
//      its also applicable to "functions" as well
const c = 300;
function x() {
    const c = 30;
    console.log(`c inside function: ${c}`);
}
console.log(`c outside function: ${b}`);

// ILLEGAL SHADOWING
const x = 20;
{
    // Uncaught SyntaxError: Identifier 'x' has already been declared
    var x = 200;
}

// shadowing a let using let is legal
// shadowing a const using const is legal
// shadowing a let using a var is illegal

// NOTE: the trick is -- shadowing is possible when a variable is confined to a block
// "var" is function scoped so shadowing a "let" using a "var" is not possible
