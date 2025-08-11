"use strict"

// why use strict mode ?
// By placing "use strict"; at the top of your file (or module), you force JavaScript into a safer, more predictable subset—helping you catch bugs early and write cleaner code.


const obj = Object.freeze({ a: 1 });
obj.a = 2; 

function sum(a, a, b) { 
  return a + a + b;
}