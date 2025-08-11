// Refer Image 1
// There are cases when the setTimeout takes more time than whats registered
// the call back fn is registered in the web apis environment
// Once the timer of 5 seconds are complete its moved to the call back queue
// But if the call stack is not empty the the callback fn is not executed
// lets say there are millions of lines that takes about 10 seconds in the call stack to be executed
// So even if the call back fn of the setTimeout takes 5 seconds to complete it will only be executed after 10 seconds.
// if the main thread is blocked then callback functions in callback queue will not be executed
// The concurrency model of JavaScript is based on the concept of an “event loop”. This model enables JavaScript to carry out non-blocking I/O operations despite being a single-threaded language. 
console.log("start");
setTimeout(() => {
console.log("Callback")
}, 0);
console.log("end");

