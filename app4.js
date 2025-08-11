// Using Fetch 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let  handlePromise = async() => {
//     console.log("Beginning")
//     const data = await fetch('https://api.github.com/users/nithin-prakash-qb')
//     console.log(data)
//     const jsonValue = await data.json()
//     console.log(jsonValue)
// }

// handlePromise()
// fetch returns a promise
// then we need to convert it from a readable stream to json
// That also a promise hence we have used await
// Thus two promises were present
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Implemented the same using .then
// we know there are two promises
// the first promise is handled using await
// the secomd promise is handled using .then

// let  handlePromise = async() => {
//     console.log("Beginning")
//     await fetch('https://api.github.com/users/nithin-prakash-qb')
//     .then(data=>{
//         console.log(data)
//         return data.json()
//     })
//     .then(jsonValue=>console.log(jsonValue))
// }


// handlePromise()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Error Handling method 1

// let  handlePromise = async() => {
//     try{
//         await fetch('https://inavlid-url')
//         .then(data=>{
//             return data.json()
//         })
//     } catch (err){
//         console.log(err);
//     }
// }

// handlePromise()
// when the promise returned by the fetch was not resolved it jumped to the catch method

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Error Handling method 2

// let  handlePromise = async() => {
//     await fetch('https://inavlid-url')
//     .then(data=>{
//         return data.json()
//     })
//     .then(jsonValue=>console.log(jsonValue))
// }


// handlePromise().catch(err=>console.log(err))
// handlePromise() is an async function which returns a promise 
// hence .then or .catch can be written as shown in the above line
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


