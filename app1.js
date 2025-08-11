// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// There are places where js expects only a single statement
// In such places if we want multiple statements we can use block
// Block also called Compound statement

if (true) console.log("Hi")
// In the above line a single statement is used

// But multiple statements can also be used using "Block" 
if (true) {
    const a = "hi"
    console.log(a)
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Refer Image 1
// There is a seperate memory of c and d
// so let and const are block scoped

// var b = 5
// {
//     var b = 10
//     let c = 100
//     const d = 1000
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }
// console.log(b);
// console.log(c);
// console.log(d);

// For variable b we can see shadowing since the same variable is being used
// b is in the global scope.Therefore can be accessed from both the lines
// console.log(b) in both lines are referring to the same memory location
// Outside the block scope c and d cannot be accessed

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var b = 10;
// {
//     var b = 20;
//     console.log(b);  
// }
// console.log(b); 

// var is not block scoped
// b is in the global scope
// Both b will print 20 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let c = 10;
// var c = 23
// {
//     let c = 20;
//     console.log(c);  
// }
// console.log(c); 

// This is same for const as well
// Since let and const are block scoped the c defined within {} has a seperate memory "block""
// the c defined outside {} is in a memory called "script".They are in the same scope as that of global scope
// redeclaration is not allowed

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

