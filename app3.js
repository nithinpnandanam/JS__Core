
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let cart = ["shirt", "pant", "kurta"];

let validateCart = () => {
  return true;
};
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// we are creating a promise using an arrow function
// promise object takes a function as argument with two parameters called resolve and reject

// let createOrder = (cart) => {
//   return new Promise((resolve, reject) => {
//     if (validateCart()) {
//       let orderId = 872;
//       setTimeout(() => {
//         resolve(orderId);
//       }, 2000);
//     } else {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//   });
// };



// let proceedToPayment = (orderId) => {
//   return new Promise((resolve, reject) => {
//     let paymentId = 123;
//     setTimeout(() => {
//       resolve(paymentId);
//     }, 2000);
//   });
// };


// let a = createOrder(cart);
// console.log(a);

// a
// .then((orderId)=>proceedToPayment(orderId))
// .then((data)=>console.log(data))
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function createOrder(cart) {
// return new Promise((resolve, reject) => {
//   if (validateCart()) {
//     let orderId = 872;
//     setTimeout(() => {
//       resolve(orderId);
//     }, 5000);
//   } else {
//     const err = new Error("Cart is not valid");
//     reject(err);
//   }
// });
// }

// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     let paymentId = 872;
//     setTimeout(() => {
//       resolve(paymentId);
//     }, 2000);
//   });
// }

// p1 = createOrder(cart);
// console.log(p1);

// createOrder(cart)
// .then((orderId) => proceedToPayment(orderId))
// .then((data)=>console.log(data))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
