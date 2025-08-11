# Primitive and Non Primitive data types

### Primitive
1. Number
2. String
3. Boolean
4. Undefined 
    - This means that a variable has been declared but has not been assigned a value,
5. Null
6. BigInt
    - BigInt data type can represent numbers greater than 2^53-1 which helps to perform operations on large numbers. 
    - The number is specified by writing 'n' at the end of the value
    - eg:let bigNum = 123422222222222222222222222222222222222n
7. Symbol
    - Symbols are new primitive built-in object types introduced as part of ES6
    - This method returns a new Symbol object.
    - ```It's mostly used as object keys to avoid name collisions and create hidden properties.```
```
<script>
    let symbol1 = Symbol("Geeks")
    let symbol2 = Symbol("Geeks")

    // Even though they look the same, each call to Symbol() returns a new, unique value.
    console.log(symbol1 == symbol2); false
</script>
```

```
const id = Symbol('userId'); // optional description for debugging

const user = {
  name: 'Alice',
  [id]: 101,  // symbol-keyed property
};

console.log(user[id]); // 101 ✅
console.log(Object.keys(user)); // ['name'] ❌ id is hidden
```

```
Yes, you can pass a string like 'userId' into Symbol()
const id1 = Symbol('user');
const id2 = Symbol('userId');

console.log(id1,id2);
- The string 'userId' is just a description or label for debugging/logging.
- It does not affect the uniqueness of the symbol.
```
### Non Primitive 

1. Object:
2. Array

# Diffrence between == and ===

### == (Loose Equality)
- Compares values after doing type conversion (if necessary).
- '5' == 5      // true  → '5' is converted to number
- null == undefined  // true → special case in JS
- 0 == false   // true  → false is converted to 0
    - when one side is boolean it will be converted into Number
    - Number(false)
    - 0 == 0
    - hence True
### === (Strict Equality)
- Compares both value and type.
- No type conversion happens — if types differ, it returns false.
- '5' === 5     // false → string vs number
- 0 === false   // false → number vs boolean
- 5 === 5       // true  → same value, same type