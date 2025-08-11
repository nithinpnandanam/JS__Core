// SET in JS

// A Set is a collection of unique values — no duplicates allowed.
// It was introduced in ES6 as part of the new built-in data structures.

// Stores only unique values.
// Values can be of any type (string, number, object, etc.).
// Insertion order is preserved.
// Provides helpful methods like .add(), .has(), .delete(), .clear().

const mySet = new Set();

// Add values
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate — ignored
mySet.add("hello");

console.log(mySet); // Set(3) { 1, 2, "hello" }

// Check existence
console.log(mySet.has(2)); // true
console.log(mySet.has(3)); // false

// Remove a value
mySet.delete(1);

// Get size
console.log(mySet.size); // 2

for (const value of mySet) {
  console.log("Value1:",value);
}

mySet.forEach(value => {
  console.log("Value2:", value);
});

// Just like with Map, Set methods like mySet.values() or mySet itself return an iterator, not an array.
const mySets = new Set([1, 2, 3]);

console.log([...mySets]);     // 👉 [1, 2, 3]