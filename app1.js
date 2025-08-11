// Using Normal function we can create callbacks

// let cart1 = ['shoes','pants','kurtas']
// function createOrderApi(cart1,proceedToPayApi){
//     // An order is created based on the values from the cart and then we call proceedToPayApi 
// }


// function proceedToPayApi(){
//     // This function must proceed to payment after a cart is formed
// }

// createOrderApi(cart1,proceedToPayApi)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Using arrow functions we can create call backs

let cart2 = ['shoes', 'pants', 'kurtas'];

const createOrderApi = (cart, proceedToPayApi) => {
    // An order is created based on the values of the cart, and then we proceedToPayApi 
    console.log("Order created with items:", cart);
    proceedToPayApi();
};

const proceedToPayApi = () => {
    // This function must proceed to payment after a cart is formed
    console.log("Proceeding to payment...");
};

createOrderApi(cart2,proceedToPayApi)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

