// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise.race example

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("P1 is Resolved")
    }, 3000);
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("P2 is Resolved")
    }, 1000);
})

// const p3 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("P1 is Resolved")
//     }, 2000);
// })

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("P3 is Rejected")
    }, 2000);
})
Promise.race([p1,p2,p3])
.then(res=>console.log(res))
.catch(err=>console.error(err))
// console.error is similar to console.log but the result is shown ini red color
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
