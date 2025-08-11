// Difference between usage of async await and normal behaviour
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let p =  new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('Promise is Resolved')
    }, 2000);
})
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// JS Engine does not wait for the promise to be resolved 
// Hello world is printed first and then after 2 seconds the response is printed
// Normal behaviour of promises

function getData1(){
    p.then(res=>console.log(res))
    console.log("Hello World")
}
getData1()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let  handlePromise = async() => {
    const result = await p;
    console.log("Hello All")
    console.log(result);
}

// Js Engine is waiting for promise to be resolved when we use await
// Only when the promise gets resolved Hello All will be printed
// handlePromise()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



