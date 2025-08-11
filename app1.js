const cart =  ['Shoes','Pants','Kurtas']

// createOrder takes in a cart and returns a promise
// Lets see how we can do that

let validateCart = () => {
    return true
}

// Below method shows how a promise can be created
// promise object takes a function as argument with two parameters called resolve and reject
function createOrder(cart){
    return new Promise((resolve, reject) => {
        if(validateCart()){
            const oredrId = '752'
            if(oredrId){
                setTimeout(() => {
                    resolve(oredrId)
                }, 1000);
            }

        // If cart is validated we are making an api call and an orderId is obtained.
        }else{
            const err = new Error("Cart is not valid")
            reject(err)
        }
        
    })
}

function proceedToPayment(orderId){
    return new Promise ((resolve,reject) =>{
        resolve(`Payment with order id ${orderId} is succesfull`)
    })
}

createOrder(cart)
.then(function(orderId){
    console.log(orderId)
    return orderId
}).then(function(orderId){
    return proceedToPayment(orderId)
    // In the above then statement an api call can be made
    // that api call returns a response 
    // Lets say it returns a value called "paymentInfo" which is used by the below then statement.
    // Here we are making use of a custom promise [proceedToPayment].
    // Whats written within resolve is obtained when we return and it is passed as argument to the below then statement
}).then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(err=>console.log(err.message))
// if there is any error in any of the promises above catch statement then the catch at the very bottom handles it
// Every then statements below catch is run without any issues .Check app2.js
// while using then remember to return else use arrow functinons 