// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// There are two ways to achieve function currying, firstly by using bind function and the second using the concept of closure. 
// Currying refers to the process of transforming a function with multiple arity into the same function with less arity.
// The curried effect is achieved by binding some of the arguments to the first function invoke, so that those values are fixed for the next invocation.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Function currying using bind
let multiply = function(x,y){
    console.log(x*y)
}

// Using bind we are creating a copy of the function called multiply
// Thus multiplyByTwo is a copy of multiply with the paramater x = 2
// so in multiplyByTwo(3) 3 refers to the variable y
let multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(3)

let multiplyRandom =  multiply.bind(this,4,5)
multiplyRandom()
multiplyRandom(7,8) // only the default values are considered 56 will not be printed
// we make a copy of the method(multiply) and we create more methods out of it by presetting the values of the function parameters from which the copy is taken
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Function currying using closures

let multiplyz = function (x){
    return function(y){
        console.log(x*y)
    }
}
let output2 = multiplyz(2)
let output3 = multiplyz(3)
output2(5)
output3(5)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
