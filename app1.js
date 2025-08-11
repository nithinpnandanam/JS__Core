// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function x(){
//     var a = 7
//     function y(){
//         console.log(a);
//     }
//     y()
// }
// x()
// A function bind together with its lexical env is called a closure
// if we put a debugger in the line where a is printed
// then the closure includes the fn y(all the variables defined in y) + the lexical scope(all the parent)
// Refer Image 3

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// example of closure
// let d = 12
// function outest() {
//     let b = 45
//     function outer(x) {
//       function inner() {
//         let c = 43
//         console.log(a,x,b);
//       }
//       let a = 10;
//       return inner;
//     }
//     return outer
//   let a = 101;
//   }
//   outest()("Hello")();
// function(all the variables defined within the function gets included in a memory called local) + lexical environment(closure memory)
// analyse it in sources tab .
// we can find that two closures will be formed for the function inner

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function x(){
//     var a = 7
//     function y(){
//         console.log(a);
//     }
//     return y
// }
// let z = x()
// console.log(z)
// z()

// Now also 7 will be printed 
// when x is invoked y is returned
// y is a function 
// the function y along with its lexical scope is called a closure and it is the closure that is returned
// When z is invoked y is getting invoked
// since y has already formed a closure when z is invoked a is accesible
 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function x(){
//     var a = 7
//     function y(){
//         console.log(a);
//     }
//     a = 12
//     return y
// }
// let z = x()
// z()
// 12 is the output

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function z(){
//     let b = 35
//     function x(){
//         var a = 7
//         function y(){
//             console.log(a,b);
//         }
//         a = 12
//         y()
//     }
//     x()
// }

// z()
// Refer Image 1

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
