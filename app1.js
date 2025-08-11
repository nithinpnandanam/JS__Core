// Reference Vs Value
// Refer Image 1
// For primitive data types we have pass by value
// For arrays and objects we have pass by reference
// Refere Image 2
// Refer Image 3
// --------------------------------------------------------------------------------------------------------------------------
// let a = 10
// let b = "Hi"
// let c = [1,2]
// let d = c

// console.log(`a = ${a}`)
// console.log(`b = ${b}`)
// console.log(`c = ${c}`)
// console.log(`d = ${d}`)
// --------------------------------------------------------------------------------------------------------------------------

// let c = [1,2]
// let d = c
// d.push(3)

// console.log(`c = ${c}`)
// console.log(`d = ${d}`)

// --------------------------------------------------------------------------------------------------------------------------

// let c = [1,2]
// let d = c


// console.log(`c === d`,c===d) 
// console.log(`c == d`,c==d)
// --------------------------------------------------------------------------------------------------------------------------
// let c = [1,2]
// let d = [1,2]

// console.log(`c === d`,c===d)
// console.log(`c == d`,c==d)
// c and d are having different memory
//  In JavaScript, objects and arrays are compared by reference, not by value.
// --------------------------------------------------------------------------------------------------------------------------
// let c=9
// let d=9
// console.log(c==d)
// console.log(c===d)
// Here, c and d are primitive values (number), and JavaScript compares primitives by value.
// --------------------------------------------------------------------------------------------------------------------------
// let c = [1,2]
// console.log("c",c)
// add(c,3)
// // not the value but the reference of c is passed in the function
// console.log("c",c)
// function add(array,element){
//     // array has the same refrence as that of c
//     // so now when array is modified c also gets modified
//     array.push(element)
// }
// --------------------------------------------------------------------------------------------------------------------------

// let c = [1,2]
// console.log("c",c)
// add(c,3)
// console.log("c",c)
// function add(array,element){
//     // array has the same refrence as that of c
//     array=[element]
//     // now array is pointing to a different memory location
//     // c remains unaffected
//     console.log("Inside",array)
// }

// --------------------------------------------------------------------------------------------------------------------------
