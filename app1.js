// A function that takes another function as an argument or return another functions from it is called a Higher order Function

// We have an array called radius [3,1,2,4]
// Calculate area circumference and diameter

const radius = [3,1,2,4]

const calculateArea = function(radius){
    const output = []
    for(let i = 0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i])
    }
    return output
}
console.log("Area",calculateArea(radius))

const calculateCircumference = function(radius){
    const output = []
    for(let i = 0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i])
    }
    return output
}
console.log("Circumference",calculateCircumference(radius))

const calculateDiameter = function(radius){
    const output = []
    for(let i = 0;i<radius.length;i++){
        output.push(2*radius[i])
    }
    return output
}
console.log("Diameter",calculateDiameter(radius))

// This is how we do normaly but its not the right approach
