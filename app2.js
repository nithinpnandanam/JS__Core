const radius = [3,1,2,4]
const area = function(radius){
    return Math.PI*radius*radius
}
const circumference = function(radius){
    return 2*Math.PI*radius
}
const diameter = function(radius){
    return 2*radius
}
const calculate = function(radius,logic){
    const output = []
    for(let i = 0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}
console.log("area",calculate(radius,area))
console.log("circumference",calculate(radius,circumference))
console.log("diameter",calculate(radius,diameter))

// Now each function has each responsibility SRP

// map is a higher order function
console.log("Using map",radius.map(area))

// Qn Make the calculate function similar to map
// Below code is a polyfill of map
Array.prototype.calculateLikeMap = function(logic){
    const output = []
    for(let i = 0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output
}
console.log("Using Custom map",radius.calculateLikeMap(area))