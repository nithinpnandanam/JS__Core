// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Refer Image 1 and 2
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Refer Image 3

// Execution context is made of 2 components
// memory component and code component
// Memory  component is also called Variable environment
// Code component is also called thread of Execution
// In Memory component variables and functions are present as key value pairs
// In the code component the code is executed line by line

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// When an execution context is created there are 2 phases associated with it
// In the memory creation phase js will assign memory to all the variables and functions
// After the memory creation phase we can find the code execution phase
// in the memory creation phase variables are given a memory and value assigned to them is undefined
// in the memory creation phase functions are given a memory and value assigned to them is the function defenition itself

// Refer Image 4 and Image 7

// Initially in the memory creation phase the variables and functions are assigned memory and undefined is stored in case of variables
// In case of functions the entire functions get stored
// when a function invocation is made an execution contest is created
// When line 6 gets executed a seperate function execution context is created with num and ans having a value of undefined [in the memory creation phase]
// num and ans later will have respective values in the function execution phase
// return keyword means return ans to the point where the function was invoked

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Refer Image 5

// The global execution context is placed inside the callstack
// when square(n) is invoked a function execution context called E1 is formed
// After the memory creation phase of E1 it will be pushed to the top of the call stack and when E1 finishes its poped out of the call stack
// The control now goes back to the GEC
// Now square(4) is invoked and  a function execution context called E2 is formed.
// After the memory creation phase of E2 it will be pushed to the top of the call stack and when E2 finishes its poped out of the call stack
// The control now goes back to the GEC
// Finally GEC is popped out of the stack
// Refer Image 6

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// JavaScript is a dynamically typed language. 
// This means that type checking occurs at runtime, during the execution of the program.
// TypeScript extends JavaScript by introducing static typing. This means that type checking occurs at compile time, before the program is executed.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

