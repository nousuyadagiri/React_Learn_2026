# JavaScript Functions

## What is a Function?

A function is a reusable block of code that performs a specific task. Functions help make code more organized, reusable, and easier to maintain.

---

# 1. Function Declaration

## Definition

A function declaration defines a named function using the `function` keyword.

### Syntax

```javascript
function functionName(parameters) {
  // code
}
```

### Example

```javascript
function greet() {
  console.log("Hello World");
}

greet();
```

### Output

```
Hello World
```

### Features

- Hoisted
- Can be called before declaration

Example

```javascript
sayHello();

function sayHello() {
  console.log("Hello");
}
```

---

# 2. Function Expression

## Definition

A function is assigned to a variable.

### Syntax

```javascript
const functionName = function () {};
```

### Example

```javascript
const greet = function () {
  console.log("Hello");
};

greet();
```

### Features

- Not hoisted like function declarations
- Can be anonymous or named

---

# 3. Named Function Expression

```javascript
const greet = function sayHello() {
  console.log("Hello");
};

greet();
```

---

# 4. Anonymous Function

## Definition

A function without a name.

### Example

```javascript
setTimeout(function () {
  console.log("Hello");
}, 1000);
```

---

# 5. Arrow Function

## Definition

Arrow functions provide a shorter syntax for writing functions.

### Syntax

```javascript
const functionName = () => {};
```

### Example

```javascript
const greet = () => {
  console.log("Hello");
};

greet();
```

---

### Single Parameter

```javascript
const square = (num) => num * num;
```

---

### Multiple Parameters

```javascript
const add = (a, b) => a + b;
```

---

### Returning Object

```javascript
const person = () => ({
  name: "John",
  age: 25,
});
```

---

### Features

- Short syntax
- Does not have its own `this`
- Commonly used in React

---

# 6. Callback Function

## Definition

A callback is a function passed as an argument to another function.

### Example

```javascript
function greet(name) {
  console.log("Hello", name);
}

function processUser(callback) {
  callback("John");
}

processUser(greet);
```

---

### Array Callback Example

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function (num) {
  console.log(num);
});
```

---

# 7. Higher-Order Function (HOF)

## Definition

A Higher-Order Function is a function that:

- Accepts another function as an argument, OR
- Returns another function.

### Example

```javascript
function calculator(operation, a, b) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculator(add, 5, 10));
```

### Output

```
15
```

---

# 8. Returning Function

```javascript
function outer() {
  return function () {
    console.log("Inner Function");
  };
}

const result = outer();

result();
```

---

# 9. Immediately Invoked Function Expression (IIFE)

## Definition

An IIFE runs immediately after it is defined.

### Syntax

```javascript
(function () {})();
```

### Example

```javascript
(function () {
  console.log("Runs Immediately");
})();
```

---

### Arrow IIFE

```javascript
(() => {
  console.log("Hello");
})();
```

---

# 10. Constructor Function

## Definition

Used to create objects before ES6 classes.

### Example

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("John", 25);

console.log(user);
```

---

# 11. Generator Function

## Definition

A generator function can pause and resume execution using `yield`.

### Syntax

```javascript
function* generatorName() {}
```

### Example

```javascript
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
```

### Output

```
1
2
3
```

---

# 12. Async Function

## Definition

Used to write asynchronous code using `async` and `await`.

### Example

```javascript
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  console.log(data);
}
```

---

# 13. Recursive Function

## Definition

A function that calls itself.

### Example

```javascript
function countdown(num) {
  if (num === 0) {
    return;
  }

  console.log(num);

  countdown(num - 1);
}

countdown(5);
```

### Output

```
5
4
3
2
1
```

---

# 14. Default Parameters

```javascript
function greet(name = "Guest") {
  console.log(name);
}

greet();
greet("John");
```

---

# 15. Rest Parameters

## Definition

Collects multiple arguments into an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30));
```

---

# 16. Function with Spread Operator

```javascript
const numbers = [10, 20, 30];

function add(a, b, c) {
  return a + b + c;
}

console.log(add(...numbers));
```

---

# 17. Method Function

A function inside an object is called a method.

```javascript
const user = {
  name: "John",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

user.greet();
```

---

# 18. Class Method

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}

const user = new Person("John");

user.greet();
```

---

# 19. Pure Function

## Definition

A pure function always returns the same output for the same input and has no side effects.

```javascript
function add(a, b) {
  return a + b;
}
```

---

# 20. Impure Function

## Definition

An impure function depends on or modifies external state.

```javascript
let count = 0;

function increment() {
  count++;
}
```

---

# Function Types Summary

| Function Type             | Purpose                             |
| ------------------------- | ----------------------------------- |
| Function Declaration      | Standard function                   |
| Function Expression       | Function stored in variable         |
| Named Function Expression | Named function assigned to variable |
| Anonymous Function        | Function without name               |
| Arrow Function            | Short syntax                        |
| Callback Function         | Passed to another function          |
| Higher-Order Function     | Accepts/returns functions           |
| Returning Function        | Returns another function            |
| IIFE                      | Runs immediately                    |
| Constructor Function      | Creates objects                     |
| Generator Function        | Pause/resume execution              |
| Async Function            | Asynchronous programming            |
| Recursive Function        | Calls itself                        |
| Method                    | Function inside object              |
| Class Method              | Function inside class               |
| Pure Function             | No side effects                     |
| Impure Function           | Has side effects                    |

---

# Most Important Functions for React Interviews ⭐⭐⭐⭐⭐

1. Function Declaration
2. Function Expression
3. Arrow Function
4. Callback Function
5. Higher-Order Function
6. Async Function
7. Pure Function
8. Recursive Function
9. Default Parameters
10. Rest Parameters

These are the function types you'll use most often in React and modern JavaScript development.

# Function Hoisting
---> Function declarations are hoisted.

````jsx
greet();

function greet() {
    console.log("Hello");
}

### Output

Hello

### Function expressions are not hoisted.

greet();

const greet = function () {
    console.log("Hello");
};

Output

ReferenceError

```jsx
