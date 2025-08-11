const arr = [1, 2, 3];
for (const num of arr) {
  console.log(num);
}

for (const num in arr) {
  console.log(num);
}

const set = new Set([1, 2, 2, 3]);
console.log(set)