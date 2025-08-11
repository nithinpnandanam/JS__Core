// Javascript is a synchronous single threaded language
// With the help of callbacks we can make js functions asyncronous
// the functions that are passed as arguments to another functions are called callback functions
function x(y){
   console.log("x is called and I am a higher order function") 
   y()
}

function y(){
    console.log("y is a callback function")
}

x(y)

// setTimeout is a web api
// Within the setTimeout we are using a callback function
// This function gets placed in the callstack after 3 seconds and then gets executed
// All fuctions are executed within the callstack 
// If there is any function thats blocking the call stack we call that phenomena as "blocking the main thread"

setTimeout(function(){
    console.log("Timer")
},3000)

function x1(y1){
    console.log("x1")
    y1()
}
function y1(){
    console.log("y1")
}
x1(y1)

let count1 = 0;
document.getElementById("click-me").addEventListener("click",function ClickFn1(){
    console.log("Button is Clicked",++count1)
})
// ClickFn1 is a callback function
// When the click event happens the callback function comes into the call stack
// Its not a good practise to place the count globally.Else count can be changed by other means and data hiding wont be there 
// ClickFn1 has formed a closure with count1
let count3 = 0
function attachEventListeners(){
    let count2 = 0;
    document.getElementById("touch-me").addEventListener("click",function ClickFn2(){
        let a = 0
        console.log("Button is Touched",++count2,++a)
    })
}
attachEventListeners()
// Now ClickFn2 (callback fn) forms a closure with variable count2

// Look into eventListeners.png
// Now all the event listeners associated with the button can be seen
// handler means the callback fnctions
// the scopes assocoated with the callback fn can also be seen

// Why should EventListeners be cleared ?
// EventListeners forms a closure.
// In the above case a closure is formed with variable count2 even if the callback function is not in the callstack
// This creates a wastage of memory
// So we remove EventListeners when we are not using them
// When we remove EventListeners all the variables that formed the closure with the callback functions are garbage collected

