// setTimeout + closures
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i)
//     },3000)
//     console.log('Hello')
// }
// x()
// Hello will be printed and after 3 sec 1 will be printed


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function x(){
//     for(var i = 1;i<=5;i++ ){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
//     console.log('Hello')
// }
// x()

// Output is shown below
// Hello
// 6
// 6
// 6
// 6
// 6

// When i == 1 a setTimeout is registered
// When i == 2 another setTimeout is registered
// When i == 3 another setTimeout is registered
// When i == 4 another setTimeout is registered
// When i == 5 another setTimeout is registered
// A closure is formed for the function
// closure = function + its lexical scope
// all the setTimeout will be there in the callback queue waiting for execution in the call stack
// After all the setTimeouts have been formed the value of i becomes 6
// since var is not block scoped all the functions in the setTimeouts are refering to the value 6
// after every second 6 will be printed 5 times

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function x(){
//     for(let i = 1;i<=3;i++ ){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
//     console.log('Hello')
// }
// x()

// Output is shown below
// Hello
// 1
// 2
// 3
// 4
// 5

// When i == 1 a setTimeout is registered
// When i == 2 another setTimeout is registered
// When i == 3 another setTimeout is registered
// When i == 4 another setTimeout is registered
// When i == 5 another setTimeout is registered
// A closure is formed for the function
// closure = function + its lexical scope
// let is block scoped
// When i == 1 a closure is formed for the function , but here i is block scoped
// When i == 2 a closure is formed for the function , but another i is formed with a block scope
// all the setTimeout will be there in the callback queue waiting for execution in the call stack
// The numbers will be printed after a timegap of 1 second

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function x(){
//     for(var i = 1;i<=5;i++){
//         function myFunc(x){
//             setTimeout(function(){
//                 console.log(x)
//             },x*1000)
//         }
//         myFunc(i)
//     }
//     console.log('Hello')
// }
// x()

// Output is shown below
// Hello
// 1
// 2
// 3
// 4
// 5

// Now the function inside the setTimeout forms a closure with x 
// x keeps on changing
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
