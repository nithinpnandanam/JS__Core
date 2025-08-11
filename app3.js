// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let p =  new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('Promise is Resolved')
//     }, 2000);
// })

// let  handlePromise1 = async() => {
//     console.log("Beginning")

//     const result1 = await p;
//     console.log("Hello All 1")
//     console.log(result1);

//     const result2 = await p;
//     console.log("Hello All 2")
//     console.log(result2);
// }

// Since result1 and result2 are waiting for the same promise to be resolved
// Beginning will be printed first then we will wait for the promise to be fulfilled since an await is present
// All the results are printed at the same instant

// handlePromise1()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let p1 =  new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('Promise is Resolved')
//     }, 10000);
// })

// let p2 =  new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('Promise is Resolved')
//     }, 5000);
// })
// let  handlePromise1 = async() => {
//     console.log("Beginning")

//     const result1 = await p1;
//     console.log("Hello All 1")
//     console.log(result1);

//     const result2 = await p2;
//     console.log("Hello All 2")
//     console.log(result2);
// }


// handlePromise1()

// when the code is executed line by line p1 is executed first even though it takes 10 seconds 
// p2 takes only 5 seconds to resolve
// but since p1 is being awaited first only when it gets resolved further lines are executed
// When p1 gets resolved everything  is printed immediately
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// let p1 =  new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('Promise is Resolved')
//     }, 5000);
// })

// let p2 =  new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('Promise is Resolved')
//     }, 10000);
// })
// let  handlePromise1 = async() => {
//     console.log("Beginning")

//     const result1 = await p1;
//     console.log("Hello All 1")
//     console.log(result1);

//     const result2 = await p2;
//     console.log("Hello All 2")
//     console.log(result2);
// }


// handlePromise1()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let p1 =  new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('Promise is Resolved')
//     }, 10000);
// })

// let p2 =  new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('Promise is Resolved')
//     }, 5000);
// })
// let  handlePromise1 = async() => {
//     console.log("Beginning")

//     const result1 = await p1;
//     console.log("Hello All 1")
//     console.log(result1);

//     const result2 = await p2;
//     console.log("Hello All 2")
//     console.log(result2);
// }


// handlePromise1()

// Initially when handlePromise1 is called a function execution context is created and it moves to the call stack
// After "Beginning" is printed we have an await 
// The function execution of handlePromise1 is suspended
// i.e, handlePromise1 is removed from the call stack
// Thus there is no blocking of the main thread
// Call stack is available for other activities {Call stack is not blocked}
// When p1 is resolved handlePromise1 comes back to the call stack
// Now there will be function execution of handlePromise1 inside the call stack
// It starts executing from where it left.
// i.e, just after the await printing "Hello All 1"
// Since p1 took 10 sec to complete p2 which took 5 seconds will already be complete

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


