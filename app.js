// Rest Operator (...)
// Collects the remaining elements into an array or object.

// function sum(...numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
//   }
//   sum(1, 2, 3); // 6
  
// const [first, ...rest] = [1, 2, 3, 4];
// const { name, ...others } = { name: 'Nithin', age: 25, city: 'Mumbai' };
// console.log(others)

// Spread Operator (...)
// Expands (or "spreads") elements of an array or object.
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// object cloning
// const user = { name: 'Nithin' };
// const clone = { ...user, age: 25 }; // { name: 'Nithin', age: 25 }