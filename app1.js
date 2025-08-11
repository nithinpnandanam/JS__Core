// b() If we execute this an error will be shown since in the memory creation phase the value of b is "<value unavailable>"
// Only when the code is executed line by line variable b gets the function assigned to it

// Function Statement aka Function Declaration
function a(){
    console.log("a is called")
}

// Function Expression
// The function is assigned to a variable
// In Many programming languages we cannot do it

b()
let b = function (){
    console.log("b is called")
}

// Difference between Function Statement and Function Expression
// Function statement can be called even before initialising  
// Function hoisting
// until b gets a value its in the temporal dead zone
// so in case of a function exression we should call the function only after its initialised
// else we get an error
// in the memory creation phase b will get a value called "<value unavailable>" in a memory section called script

// Anonymous functions are used in places where functions are used as values
// In the function expression mentioned above we can see that an anonymous function is being used

// Named Function expression
let c = function xyz(){
    console.log("c is called")
}
// This is similar to function expression but instead of anonymous function a named function is used. 
// c() ==>> c is called
// xyz() ==>> xyz is not defined since in the global scope xyz is not present

// Difference between param and argument
function sum(param1,param2){
    console.log(param1+param2)
}

// sum(1,2) ==>> 3 (1 and 2 are the argument)

// First Class Functions
// When functions are used as values its called First class functions
// like values functions can be passeed as arguments and can also be returned 
// two examples which shows how a function can be passed as an argument
let firstClassfn1 = function (param1){
    console.log("param1",param1)
}

firstClassfn1(function argumentFn1(){

})

let firstClassfn2 = function (param2){
    console.log("param2",param2)
}
function argumentFn2(){

}
firstClassfn2(argumentFn2)

// Below is an example that shows that function can be returned as well from another function
function firstClassfn3(){
    return function(){

    }
}

let returnedFn = firstClassfn3()
console.log("returnedFn",returnedFn)
// Arrow functions was a part of ES6

// eg of how a function can be returned
function outer(){
    function inner(){
        console.log("inner")
    }
    return inner
}

const x = outer()
x()

// eg of how a function can be passed as an argument
let fn = function(){
    console.log("hello")
}
function outer(param){
    param()
}

outer(fn)
