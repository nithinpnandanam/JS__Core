const cart = ["Shoes", "Pants", "Kurtas"];
// createOrder proceedToPayment orderSummary
const createOrder = function (cart) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let orderId = 123;
      resolve(orderId);
    }, 1000);
  });
  return p;
};

const proceedToPayment = function (orderId) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let paymentId = 456;
      resolve(paymentId);
    }, 1000);
  });
  return p;
};

const orderSummary = function (paymentId) {
  const p = "This is your order summary for " + paymentId;
  console.log(p);
};

// createOrder(cart)
// .then((orderId) => proceedToPayment(orderId))
// .then((paymentId)=> orderSummary(paymentId))


createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentId){
    orderSummary(paymentId)
})