// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What is a closure ?

// A function bind together with its lexical env is called a closure
// Each and every function has access to its outer lexical environment
// i.e, variables and functions present in the lexical environment of the parent or in the scope chain
// Even if the function is executed not in the original scope then also the function will have the outer lexical environment that it had in the original scope 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Write an example of closure
// function outer(){
//     let a =10
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }
// outer()()
// inner fn has formed a closure with the lexical environment.
// lexical environment = local memory + lexical env of its parent
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Will this produce the same output ?
// function outer(){
//     function inner(){
//         console.log(a)
//     }
//     let a =10
//     return inner
// }
// outer()()
// Yes the same output is produced
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Whats happens when outer takes a parameter?
// function outer(x){
//     function inner(){
//         console.log(a,x)
//     }
//     let a =10
//     return inner
// }
// outer("Hello")()
// This happens because inner fn forms a closure with the lexical environment
// x is a part of the lexical environment
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What if the outer fn is nested inside a function
// function outest() {
//   let b = 45
//   function outer(x) {
//     function inner() {
//       console.log(a, x,b);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer
// }
// outest()("Hello")();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// if I try duplicating the let declaration of a after returning outer
//  function outest() {
//   let b = 45
//   function outer(x) {
//     function inner() {
//       console.log(a, x,b);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer
//   let a = 101;
// }
// outest()("Hello")();

// function outest() {
//   let b = 45;
//   function outer(x) {
//     function inner() {
//       console.log(a, x, b);
//     }
//     return inner;
//   }
//   return outer;
// }
// let a = 101;
// outest()("Hello")();

// function outest() {
//   let b = 45;
//   function outer(x) {
//     function inner() {
//       console.log(a, x, b);
//     }
//     return inner;
//   }
//   return outer;
// }
// outest()("Hello")();
// ReferenceError: a is not defined
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Advantages of closures
// Data hiding and encapsulation
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Anyone can access the counter and change the value

// function wrapCounter(){
//     let counter =0
//     function incrementCount(){
//         counter++
//         console.log(counter)
//     }
//     return incrementCount
// }
// let counter_1 = wrapCounter()
// counter_1()
// counter_1()

// let counter_2 = wrapCounter()
// counter_2()
// counter_2()

// Now we cannot simply acces the counter
// Thus encapsulation
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// with the help of constructor
// function wrapCounter(){
//     let counter =0
//     this.incrementCount=function(){
//         counter++
//         console.log(counter)
//     }
//     this.decrementCount=function(){
//         counter--
//         console.log(counter)
//     }
    
// }
// let counter_3 = new wrapCounter()
// counter_3.incrementCount()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What is a Garbage collector ?
// Its a program in the browser or js engine that frees up the un-utilised memory
// In languages ike java its upto developers on how memory is used
// but in the case of js thats not how things work
// unused variables are removed thus clearing the memory with the help of garbage collector
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What is the relation between garbage collector and closures

// function a(){
//     let b1 = 1
//     console.log(b1)
// }
// a()
// So in the above case after a is executed the value of b1 is garbage collected
// But in the below case due to formation of closure its not garbage collected
// function a(){
//     let b1 = 1
//     return function(){
//         console.log(b1)
//     } 
// }
// let x = a()
// x()
// since variables are not garbage collected memory utilisation increases
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function a(){
//     let b1 = 1
//     let b2 = 10
//     return function(){
//         console.log(b1)
//     } 
// }
// let x = a()
// x()
// concept of smart garbage collection is relevant here
// since b2 is not used its garbage collected and does not become a part of the closure

// let a = 1
// function outer(){
//     let b = 10
//     let b2 = 23
//     function inner(){
//         let c = 100
//         console.log("b",b)
//     }
//     return inner
// }
//  let result = outer()
// result()
// console.log("End")
// concept of smart garbage collection is relevant here also
// since b2 is not used its garbage collected and does not become a part of the closure
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let a = 1
// function outer(){
//     let b = 10
//     let b2 = 23
//     function inner(){
//       let c = 100
//       console.log("b",b)
//     }
//     return inner
// }
//  outer()()
// b2  garbage collected
// Not used anywhere.
// Not captured by inner().
// Eligible for garbage collection once outer() finishes executing.

// c is not garbage collected
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let a = 1
// function outer(){
//     let b = 10
//     let b2 = 23
//     function inner(){
//       let c = 100
//       console.log("b",b)
//       function innerst(){
//         let d = 111
//         console.log("d",d)
//       }
//       return innerst
//     }
//     return inner
// }
//  outer()()()
//  b2 and c are garbage collected
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
