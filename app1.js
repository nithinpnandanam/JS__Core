// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
async function getData(){
    return 'Cactus'
}
const promiseObj = getData()
console.log(promiseObj)
// when we write an async along with a function then that function always returns a Promise
// But in the above case its returning a value
// Yet this value will be wrapped inside a promise and then the promise will be returned
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let p =  new Promise((resolve,reject) =>{
    resolve('Promise is Resolved')
})
function getData1(){
    p.then(res=>console.log(res))
}
getData1()
// await is a js keyword that can be used only inside an async function
// This is how we use async await using arrow function
let  handlePromise = async() => {
    // Instead of p.then we are using await p.Note the difference
    const result = await p;
    console.log("Result",result)
}
handlePromise()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Using function declaration/statement  we do the below method 

// async function handlePromise(){
//     const result = await p;
//     console.log("Result",result)
// }
// handlePromise()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



