// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Temporal Dead Zone
// Time between a let/const variable is hoisted and initialised  a value
// A Reference error is shown when we try to access a variable in the temporal dead zone 
// Initialse the variables at the top to reduce the problem caused by Temporal Dead Zone

// console.log(a)
// let a
// Reference Error : cannot access a before initialization

// a is not having value "undefined" but it showing "not available" in a seperate  memory space called "script"
// let a >>> its initialised with a value of undefined
// when "not available" is shown then that time the variable is declared or hoisted

// Declaration:
// Happens when the JS engine recognizes the variable via let, const, or var — this happens in the compile phase (before code runs).
// Example: let ab; — the variable ab is declared.

// Initialization:
// For let and const, during the compile phase, the variable is not initialized immediately. Instead, it's placed in the Temporal Dead Zone (TDZ).
// Initialization happens only when the let line is actually executed at runtime.
// Until this point, the variable exists in memory but is inaccessible — trying to access it gives a ReferenceError.

// Assignment:
// Happens when a value is actually assigned, like ab = 10.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// console.log(b)
// var b

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// b is attached to the global object called window
// but a is not attached to the global object called window
// a has a seperate memory

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let c
// console.log(c)
// before "let c" is executed the value of c is "not available"
// but after its executed c has a value of undefined
// let c1 = 43
// console.log(window.c1) // undefined
// var a1 =43
// console.log(window.a1)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let c
// c=12
// console.log(c)
// c=13
// console.log(c)
// We cannot do the same for const

// const d;
// d = 13
// We will get a "syntax error"

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let e = 13
// e = 'thirteen'
// console.log(e);
// No Error

// const f= 14
// f = 15
// console.log(f)
// Now we get a "type error"
// Assignment to constant variable.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let g = 67;
// let g = 24;
// Redeclaration is not possible
// Syntax Error

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Will "hello" be printed
// console.log("Hello")
// let h = 67;
// let h = 24;

// Nothing will be printed as there is a syntax error

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var i = 56;
// var i = 57;
// In case of var Redeclaration is possible

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var i = 56;
// let i = 57;
// i is in the global scope and j is in the script scope of memory
// redeclaration is not allowed in the same the scope
// let j = 57;
// var j = 56;

// Due to Redeclaration error will be shown
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


