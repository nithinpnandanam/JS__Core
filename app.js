// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Whenever an execution context is created "this" is also created along with it.
// In the case of a global execution context we know a global object called "window" is created
// In the global execution context "this" refers to the global object called "window" in case of browsers

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// What is global space ?

// any code that we write in js which is not in a function is called global space

var x =10;
function getData(){
    var a = 12;
}
console.log(window)
console.log(x)
console.log(window.x)
console.log(this.x)

// x is in the global space/global scope while a is not
// x gets attached to the global object called window
// Now x becomes another key of global object [window]
// So x can also be accesed as window.x
// Even if we dont put "window." js engine knows we are refering to the variable x in the global space


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




