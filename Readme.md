# ES6 Features
1.Block-Scoped Declarations

- let and var are block scoped

2.Arrow Functions

3.Template Literals

```
const name = "Nithin";
console.log(`Hello, ${name}!`);
```

4.Set default values for function parameters

```
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

5.Destructuring Assignment

```
const [x, y] = [1, 2];
const { name, age } = { name: "Nithin", age: 25 };
```

6.Rest and Spread Operators

```
// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3];

// Rest
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```
7.Modules (import/export)

```
// export.js
export const a = 10;
export default function sayHi() {}

// import.js
import { a } from './export.js';
import sayHi from './export.js';
```

8.Iterators and for...of Loop

```
const arr = [1, 2, 3];
for (const num of arr) {
console.log(num);
}

- if we use in we get index
```

9.Symbols

- const sym = Symbol("id");
- a new primitive data type

10.Map and Set

```
const map = new Map();
map.set("a", 1);

const set = new Set([1, 2, 2, 3]); // unique values
```

11.Promise 
- it was introduced in ES6 (ECMAScript 2015) as a native way to handle asynchronous operations in JavaScript — replacing deeply nested callbacks (aka “callback hell”) and inversion of control

12

```
const name1 = "Ross Geller";
const user = {
  name1: name1,
  greet: function() {
    console.log("welcome");
  },
};
console.log(user);
const user2 = {
  name1,
  greet() {
    console.log("welcome");
  },
};
console.log(user2);
```
