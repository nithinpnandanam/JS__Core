// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What is the defenition of hoisting ?

// Its a phenomenon in js by which we can access the variables and functions even before you have initialised it.
// We can acces without any error.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Predict the output

// let x = 6;
// function showResult(){
//     console.log("Result")
// }

// console.log(x)
// showResult()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Predict the output
// This can be considered as an example for hoisting 
// no error is produced

// console.log(x)
// showResult()

// var x = 6;
// function showResult(){
//     console.log("Result")
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Predict the output

// console.log(x)
// showResult()
// function showResult(){
//     console.log("Result")
// }
// ReferenceError: x is not defined
// x is not present in the global scope
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Predict the output

// console.log(ab) 
// showResult()

// let ab = 6;
// function showResult(){
//     console.log("Result")
// }

// ReferenceError: Cannot access 'ab' before initialization
// the variable ab is not in the global scope but in scope called "script".
// in the script memory its given <value unavailable>
// this happens because let is used.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Predict the output

// console.log(x) 
// showResult()

// var x = 6;
// var showResult = () => {
//     console.log("Result")
// }

// in case of arrow functions showResult will be having value of undefined in the memory creation phase.
// "showResult is not a function" error is shown

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let ab 
console.log(ab)
console.log("Hii")
ab=10
console.log(ab)

// Declaration:
// Happens when the JS engine recognizes the variable via let, const, or var — this happens in the compile phase (before code runs).
// Example: let ab; — the variable ab is declared.

// Initialization:
// For let and const, during the compile phase, the variable is not initialized immediately. Instead, it's placed in the Temporal Dead Zone (TDZ).
// Initialization happens only when the let line is actually executed at runtime.
// Until this point, the variable exists in memory but is inaccessible — trying to access it gives a ReferenceError.

// Assignment:
// Happens when a value is actually assigned, like ab = 10.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


