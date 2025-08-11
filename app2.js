// Using Callbacks async operations can be handled but the two issues with it are

// 1 Callback Hell
// 2 Inversion of control

// createOrderApi => proceedToPayApi => showOrderSummary 
// Lets say we are creating an order and then the payment is made and once its done we are showing the order summary to the user 

let cart = ['shoes', 'pants', 'kurtas'];

const createOrderApi = (cart, proceedToPayApi) => {
    // An order is created with items from the cart by making an api call
    // and an orderID is obtained as response
    let orderID = 123
    proceedToPayApi(showOrderSummary,orderID);
};

const proceedToPayApi = (showOrderSummary,orderID) => {
    // This function must proceed to payment page with the help of the orderID
    // an api call is made and a payment id is obtained if the payment is completed 
    // then the order summmary must be shown
    let paymentID = 456
    showOrderSummary(paymentID);
};

const showOrderSummary = (paymentID) =>{
    // an api call with paymentID is made and we get the order summary
    console.log("Show Order Summary of our order")
}
createOrderApi(cart,proceedToPayApi)

// This is called CallBack hell
// a callback inside another callback and so on.
// nested callback
// Our code starts growing horizontally rather than vertically >>> This structure is called Pyramid of Doom
// Each function is dependent on the other
// Unreadable and unmaintanable
// Resolved with the help of promise chaining
// Kyle Simpson 

// Inversion of Control
// We are Blindly trusting proceedToPayApi to call showOrderSummary
// We are Blindly trusting createOrderApi to call proceedToPayApi

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let cart = ['shirt','pants']
// function createOrder(cart,proceedToPayment){
//     let orderId  
//     setTimeout(()=>{
//         orderId = 123
//         proceedToPayment(orderId,OrderSummary)
//         console.log("step 1")
//     },1000)

// }

// function proceedToPayment(orderId,OrderSummary){
//     setTimeout(()=>{
//         let paymentId = 456
//         OrderSummary(paymentId)
//     },2000)
// }

// function OrderSummary(paymentId){
        // an api call with paymentID is made and we get the order summary
//     console.log("showing order summary of ",paymentId)
// }

// createOrder(cart,proceedToPayment)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
