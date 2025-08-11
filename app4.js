// ES6 Array methods in 

// map()
// const nums = [1, 2, 3];
// const doubled = nums.map(n => n * 2); // [2, 4, 6]

// filter()
// const nums = [1, 2, 3, 4];
// const evens = nums.filter(n => n % 2 === 0); // [2, 4]

// reduce()
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // ➡️ 10

//  find()
// Returns the first element that satisfies a condition.
// undefined if no element satisfies the condition
// const nums = [1, 2, 3];
// const firstEven = nums.find(n => n % 2 === 0); // 2

// findIndex()
// const nums = [1, 2, 3];
// const index = nums.findIndex(n => n > 2); // 2

// some()
// Checks if at least one element matches a condition.
// false if no element satisfies the condition
// const nums = [1, 2, 3];
// const hasEven = nums.some(n => n % 2 === 0); // true

//  every()
// Checks if all elements match a condition.
// const nums = [2, 4, 6];
// const allEven = nums.every(n => n % 2 === 0); // true

// includes()
// const items = ['apple', 'banana'];
// items.includes('apple'); // true

// sort()
// Sorts array in-place.
// [3, 1, 2].sort(); // [1, 2, 3]

// let a = ['z','n','a'].sort()
// console.log(a)

// forEach()
// [1, 2, 3].forEach(n => console.log(n));

// slice()
// [1, 2, 3, 4].slice(1, 3); // [2, 3]

// splice()
// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, "May");
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, ...["Feb",'asdjkb']);