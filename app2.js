// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// var b = 10;
// function myFunc(){
//     var b = 20;
//     console.log(b);  
// }
// myFunc()
// console.log(b);  

// console.log(b) within the function => 20
// console.log(b) outside the function => 10
// when a function is created a seperate execution context is created called local

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let b = 10;
// function myFunc(){
//     let b = 20;
//     console.log(b);  
// }
// myFunc()
// console.log(b);  

// console.log(b) within the function => 20
// console.log(b) outside the function => 10
// when a function is created a seperate execution context is created called local

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var a = 23
// {
//     var a =24
// }
// console.log(a);

// 24 will be printed
// Both a are referring to the a in the global scope
// a is not block scoped

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var a = 23
// {
//     let a =24
//     console.log(a)
// }
// console.log(a)

// ans
// 24
// 23
// the a within {} is in a block scope
// the a outside {} is in global scope


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let a = 23
// {
//     var a = 24
//     console.log(a)
// }
// console.log(a)

// error
// let a = 23 => produces a not in the block scope {script}
// var a = 24 => does not produce a in the block scope but in the global scope {global}
// script and global is in the same space
// both the let and var declarations,are in the same scope. 
// This leads to a conflict and an error because we're trying to declare the same variable twice in the same scope.
// redeclaration is not allowed

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// The same problem exists here because we're trying to declare the same variable twice in the same scope.
// let a = 12
// var a = 13
// console.log(a)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let a = 23
// {
//     let a =24
//     console.log(a)
// }
// console.log(a)

// Here a within {} is in the block scope
// a outsude {} is in another memory called script scope
// so no error is produced

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const a = 1
// {
//     const a = 2
//     {
//         const a = 3
//         console.log(a)
//     }
// }

// the a nested deep within has lexical environment of the parent
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
