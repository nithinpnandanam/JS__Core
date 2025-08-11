// -------------------------------------------------------------------------------------------------------------------
// let developer1 = {name:"Chandler"}
// let developer2 = developer1
// // developer1 and 2 are pointing to the same memory location.
// // this is an example of shallow copy
// developer2.name = "Joey"
// console.log("developer1",developer1)
// console.log("developer2",developer2)
// -------------------------------------------------------------------------------------------------------------------
// Approach 1 for creating a deep copy
// let developer1 = {name:"Chandler"}
// let developer2 = Object.assign({},developer1)
// developer2.name="Joey"
// console.log("developer1",developer1)
// console.log("developer2",developer2)
// -------------------------------------------------------------------------------------------------------------------
// Approach 2 for creating a deep copy using spread operator
// let developer1 = {name:"Chandler"}
// let developer2 = {...developer1}
// developer2.name="Joey"
// console.log("developer1",developer1)
// console.log("developer2",developer2)
// -------------------------------------------------------------------------------------------------------------------
// Approach 1 and 2 is not that efficient to create deep copies 
// they only produce partial deep copies
// when nested objects are present deep copies cannot be made correctly
// let developer1 = {name:"Chandler",skills:{
//     skill1:"FE",
//     skill2:"BE",
//     skill3:"DevOps"
// }}
// let developer2 = {...developer1}
// developer2.name="Joey"
// developer2.skills.skill1 = "Full Stack"
// console.log("developer1",developer1)
// console.log("developer2",developer2)
// developer1 also gets changed when developer2 is modified
// for nested items problems happen
// -------------------------------------------------------------------------------------------------------------------
// Approach 3 is to use JSON.stringify and JSON.parse
// let developer1 = {name:"Chandler",skills:{
//     skill1:"FE",
//     skill2:"BE",
//     skill3:"DevOps"
// }}
// let developer2 = JSON.parse(JSON.stringify(developer1))
// developer2.name="Joey"
// developer2.skills.skill1 = "Full Stack"
// console.log("developer1",developer1)
// console.log("developer2",developer2)
// This approach works well
// but when we have functions then issue will appear
// -------------------------------------------------------------------------------------------------------------------
// let developer1 = {name:"Chandler",skills:{
//     skill1:"FE",
//     skill2:"BE",
//     skill3:"DevOps"
//     },
//     joiningDate:new Date(),
//     fn1:function(){
//         return 24
//     }
// }
// let developer2 = JSON.parse(JSON.stringify(developer1))
// developer2.name="Joey"
// developer2.skills.skill1 = "Full Stack"
// console.log("developer1",developer1)
// console.log("developer2",developer2)
// here functions are not obtained when we take a copy
// date object has a type of object in developer1
// but in developer2 date object is having string type
// these two inconsistencies are present when we use JSON.parse(JSON.stringify(data))
// -------------------------------------------------------------------------------------------------------------------
// Approach 4 would be using an external library like lodash to perform deep copy
// -------------------------------------------------------------------------------------------------------------------
// Approach 5
// let developer1 = {name:"Chandler",skills:{
//     skill1:"FE",
//     skill2:"BE",
//     skill3:"DevOps"
//     },
//     joiningDate:new Date(),
// }
// const developer2 = structuredClone(developer1)
// developer2.name="Joey"
// developer2.skills.skill1 = "Full Stack"
// console.log("developer1",developer1)
// console.log("developer2",developer2)
// functions cannot be cloned using structuredClone
// functions cannot be cloned using lodash as well
// -------------------------------------------------------------------------------------------------------------------
