// Data types in JS: 
// null (object), infinity (number), infinity (number), boolean, number, string

const a = '4';
const b = 5;

// op is a string:
// type converion takes place 
// also called as cohersion in JS 
// + is an overloaded operator 
console.log(a + b); // implicit cohersionm

// op is a number
// 4 will be converted to a number 
console.log(Number(a) - b); // explicit cohersion

// no error 
console.log(a * b); 

// no error
console.log(a / b);

// NOTE: JS is loosely typed language it will not throw an error right away
// explicit cohersion: +, parseInt and Number

// undefined
let c;
console.log(typeof c);

// object
let om = {
    name: "Om",
    class: "B26WE"
}
console.log(typeof om);
console.log(om.name);
// box syntax
console.log(om["name"]);

// array is also an object
console.log(typeof [1,2,3]);

// null is also an object
// JS team wanted to change it but didn't 
// as it would affect backward compatibility
console.log(typeof null);

// ** is also a number
let z = "3a" - 4;
// op: NaN  number
console.log(z, typeof z);

// infinity
// op: Infinity number
console.log(Infinity, typeof Infinity);
console.log(Infinity + 100);


// IMP: == and ===
// === is faster, as cohersion happens in == and involves 2 steps 
// === does not allow cohersion 
// r1 -> x1 = 2; JS goes to the addresses and compares the values
// r2 -> x2 = 2; 
const r1 = 2;
const r2 = 2;

console.log(1 == "1", 1 === "1"); // 1st one has 2 steps hence its SLOWER 

const r3 = [1,2];
const r4 = [1,2];
// op: true false true
const r5 = r4;
// nothing to do with data types
// we need to understand how arrays are stored
// in r3 and r4 case cannot check array values 
// r4 and r5 the address space is same hence it returns true
console.log(r1 === r2, r3 === r4, r5 === r4);


console.log(r4.push(7));
// [ 1, 2 ] [ 1, 2, 7 ] [ 1, 2, 7 ]
// r4 and r5 share the same address space not r3
console.log(r3, r4, r5);

// Number - processes objects
// parseInt - only accepts strings (primitives)

// spread operator
const t1 = [1,2,3];
// op: 1,21,2,3
console.log(r3 + t1);

// op: [ 1, 2, 1, 2, 3 ]
const t2 = r3.concat(t1);
console.log(t2);

// spreading values of an array
// op: [100, 1, 2, 10]
const t3 = [100,...r3, 10];

// op: [ 1, 2, 1, 2, 7 ]
const t4 = [...r3, ...r4];
console.log(t4);

const t5 = [...r5];
// new memory address is created as we copy by value not by reference
// op: [ 1, 2, 7 ] [ 1, 2, 7 ] false
console.log(r5, t5, r5 === t5);