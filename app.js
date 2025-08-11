// Js is a synchronous single threaded language
// It has one call stack and can do one thing at a time 
// The call stack is present inside the js Engine


// Refer Image 1
// At first a Global Execution Context is created and it is pushed into the call stack
// Then the code runs line by line
// when function invocation of a happens { a() } that function execution context of a is created and is pushed into the call stack for execution
// Once executed that function is popped out of the Call Stack
// When "console.log("End") is run GEC is finished 
// GEC is then popped out of the call stack
// Call stack executes what all comes inside it and it does not wait for anything

// Refer Image 2
// Refer Image 3
// window is a global object 
// the web API's are functionalities provided by the browser for the js engine[in turn the call stack]


// Refer Image 4
// When start and end are printed in the console GEC is poped out of the call stack
// the call back function called cb is registered in the web apis environment with a timer of 5 seconds.
// When the timer expires the call back function is placed in the callback queue
// Event Loop continously monitors the call stack,Call back queue and Microtask queue
// if call stack is empty then the call back fn is placed in the call stack to get executed[Execution context is created for the callback function and it runs line by line]

// Refer Image 5
// the call back function is registered in the web apis environment along with the event click.
// thus in the web api's environemnt event listeners are present .
// Event handler will stay in the web api's environment unless its cleared expilictly or when the browser is closed
// Event = click
// When the button is clicked the callback fn moves to the call back queue
// Event Loop continously monitors the call stack,Call back queue and Microtask queue
// if call stack is empty then the callback function is executed

// Refer Image 6
// if we click continuously que is formed in the callback queue
// There will be lot of event listeners and timeouts
// So a queue needs to be maintained in the callback queue
// the first cb in callbackque will be executed in the call stack
// then the second and it continues

// Refer Image 7
// fetch is a web api which returns a promise
// Once its resolved then the callback fn will be moved to the microtask Queue similar to how the callback fn is moved to the callback que when the setTimeout expires
// At first the callback fn is registered in the web api environment.When the fetching is complete its moved to the Microtask queue
// Micro task queue has the highest priority
// Event Loop continously monitors the call stack,Call back queue and Microtask queue
// lets say there are 3 call back functions in the microtask queue and one call back fn in the callback queue
// Only when all the call back functions in microtask queue are executed call back fn from callback queue will be executed
// Callback functions from setTimeouts and event listeners are mainly present in callback queue
// callbacks from fetch and Mutation Observer are present in the microtask queue

// Explain Startvation in callback queue ?
// Refer Image 8
// In Microtask queue if one callback fn results in formation another call back fn there itself and if this process continues then the callback fn in the call back queue will take long time to execute this is called starvation in the callback queue

// 1.When does the event loop actually start? - 
// Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job.
// 2.Are only asynchronous web API callbacks are registered in the web API environment? - 
// YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
// 3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - 
// Yes, the callback functions are stored, and a reference is scheduled in the queues. 
// Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever.
// That's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
// 4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
// No, there are trust issues with setTimeout(). The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 1000ms also if the stack is busy.




