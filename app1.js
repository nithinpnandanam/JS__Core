// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let name = {
    firstName:"Chandler",
    lastName:"Bing",
    printFullName:function(){
        console.log(this.firstName+' '+this.lastName)
    }
    // this refers to the 'name'
}
name.printFullName()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let name2 = {
    firstName:"Monica",
    lastName:"Geller",
    printFullName:function(){
        console.log(this.firstName+' '+this.lastName)
    }
    // printFullName is used again
    // this is not a good practise
    // we can borrow the function from name object (other objects) using "call"
}

name.printFullName.call(name2)
// "name.printFullName" >> the method we need to copy
// the printFullName fn in the name object has "this" in its function defenition
// when we use call we are saying "name2" corresponds to this

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Generally we dont write functions that needs to be borrowed within an object
let printFullName = function(){
    console.log(this.firstName+' '+this.lastName)
}

// be carefull not to write like the below Step since this in arrow function is different
// let printFullName = () => {
//     console.log(this.firstName+" "+this.lastName)
// }
printFullName.call(name) // this in printFullName refers to name 
printFullName.call(name2) // this in printFullName refers to name2
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// In case we have arguments
let printFullName1 = function(state,country){
    console.log(this.firstName+' '+this.lastName+' from state '+state +' and country '+country)
}
printFullName1.call(name,"Kerala","India")
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// APPLY
// In case we use apply we give the arguments in an array rather than comma seperating
// Thats the diffrence between call and apply
let printFullName2 = function(state,country){
    console.log(this.firstName+' '+this.lastName+' from state '+state +' and country '+country)
}
printFullName2.apply(name,["Kerala","India"])
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// BIND
// we get a copy of the method which can be invoked later
// Here the parameters must be comma seperated
// Difference of bind with apply is that here a function is returned that can be invoked later
let printFullName3 = function(state,country){
    console.log(this.firstName+' '+this.lastName+' from state '+state +' and country '+country)
}
let x = printFullName3.bind(name,"Kerala","India")
x()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

