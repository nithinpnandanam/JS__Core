// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Using arrow functions we can create call backs

// let cart = ['shoes', 'pants', 'kurtas'];

// const createOrderApi = (cart, proceedToPayApi) => {
//     an api call is made with items from the cart as payload and an orderID is obtained
//     proceedToPayApi(OrderID);
// };

// const proceedToPayApi = (OrderID) => {
//     console.log("Proceeding to payment...");
// };

// createOrderApi(cart,proceedToPayApi)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const createOrderApi = (cart) => {
//     an api call is made with items from the cart as payload and an orderID is obtained
// };
// const promiseObj = createOrderApi(cart)
// createOrderApi(cart) is an asynchronous operation


// createOrderApi(cart) returns a promise
// This promise has a state as well as a result 
// The 3 states that a promise can have is shown below
// pending - The initial state of a promise.
// fulfilled - The state of a promise representing a successful operation.
// rejected - The state of a promise representing a failed operation.

// The Result 
// In Contrast to the above case we are attaching the callback to the promise object rather than passing the callback proceedToPayApi blindly to createOrderApi
// promiseObj.then(proceedToPayApi())
// If we have a result say an OrderID from the first api call that needs to be passed to proceedToPayApi then 
// promiseObj.then((OrderID)=>proceedToPayApi(OrderID))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise is an object representing eventual completion or failure of an asynchronous operation
// const GITHUB_USER = "https://api.github.com/users/nithin-prakash-qb"
// const promiseObj = fetch(GITHUB_USER)
// console.log(promiseObj) 
// Refer Image 1
// In the console we can see the status as "pending" .
// This is because js does not wait to get the response so immediately the status is shown as such.
// Eventually we will get the response
// So when we open the result in the console we can see the state as "fulfilled".
// Initially the result of the promise will be "undefined" later it changes to the response from the BE

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// promiseObj.then((res)=>console.log(res))
// This returns response from the BE.It can be  an object, a big array of objects and like wise 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Refer Image 2 and Image 3
// They are the same 
// When we chain a promise remember to return since the response from one promise might be used by the next promise

// Call Back hell is resolved using promise chaining
// Similarly only when the promise Object gets resolved the callback attached to it will run
// Thus inversion of control is also solved

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// we can invoke a promise using .then or async await
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

