// Map in JS
// A Map is a built-in JavaScript object introduced in ES6 that stores key-value pairs — just like a regular object — but with some key improvements.

const myMap = new Map();

// Key Features of Map:
// Keys can be of any type (not just strings or symbols like in objects).
// Maintains insertion order.
// Provides useful built-in methods like .set(), .get(), .has(), .delete().
// More performance improvement than object

// Set values
myMap.set('name', 'Chandler');
myMap.set(1, 'one');
myMap.set(true, 'yes');


console.log("myMap",myMap)

myMap.forEach(a => {
  console.log("==",a);
});

myMap.forEach((value, key) => {
  console.log(`hi ${key} => ${value}`);
});

// When you call myMap.keys(), it returns a Map Iterator, not a plain array. You need to spread it ([...]) to convert it into an array if you want to view or manipulate it like one.
console.log([...myMap.keys()]);   // Get all keys
console.log([...myMap.values()]); // Get all values
console.log([...myMap.entries()]); // Get key-value pairs

// Get values
console.log(myMap.get('name')); // "Chandler"
console.log(myMap.get(1));      // "one"
console.log(myMap.get(true));   // "yes"

// Check existence
console.log(myMap.has('name')); // true

// Size
console.log(myMap.size); // 3

// Delete
myMap.delete(1);

// Iterate

for (let a of myMap) {
  console.log(a);
}


for (let [key, value] of myMap) {
  console.log(`hiii ${key} = ${value}`);
}



