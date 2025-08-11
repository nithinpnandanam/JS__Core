
// Promise.any example

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("P1 is Rejected")
    }, 3000);
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("P2 is Resolved")
    }, 5000);
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("P3 is Rejected")
    }, 2000);
})
Promise.any([p1,p2,p3])
.then(res=>console.log(res))
.catch(err=>console.error(err))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("P1 is Rejected")
//     }, 3000);
// })

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("P2 is Rejected")
//     }, 5000);
// })

// const p3 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("P3 is Rejected")
//     }, 2000);
// })
// Promise.any([p1,p2,p3])
// .then(res=>console.log(res))
// .catch(err=>{
//     console.error(err) // an AggregateError is formed
//     console.error(err.errors)
// })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
