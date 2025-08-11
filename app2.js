// This example is similar to the previous one but shows catch only works for all the then statements above it 
// so the last statement will work even if there is an error is caught in catch

const cart =  ['Shoes','Pants','Kurtas']


let validateCart = () => {
    return false
}

function createOrder(cart){
    return new Promise((resolve, reject) => {
        if(validateCart()){
            const oredrId = '752'
            if(oredrId){
                setTimeout(() => {
                    resolve(oredrId)
                }, 1000);
            }
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
}).then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(err=>console.log("err",err.message))
.then(function(paymentInfo){
    console.log("Last then statement")
})
