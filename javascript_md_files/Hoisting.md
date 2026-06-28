# Hoisting.md

# JavaScript Hoisting ⭐⭐⭐⭐⭐

Hoisting is one of the most frequently asked JavaScript interview topics.

Understanding hoisting helps you understand:

- Execution Context
- Memory Creation Phase
- Execution Phase
- var vs let vs const
- Function Hoisting
- Temporal Dead Zone (TDZ)

---

# What is Hoisting?

**Hoisting is JavaScript's behavior of processing declarations before executing the code.**

This does **NOT** mean JavaScript physically moves your code.

Instead, during execution, JavaScript scans your code and registers variable and function declarations before running it.

---

# Simple Example

```javascript
console.log(name);

var name = "Nousu";
```

Output

```
undefined
```

Many beginners expect:

```
ReferenceError
```

But JavaScript behaves like this internally:

```javascript
var name;

console.log(name);

name = "Nousu";
```

Notice:

Only the **declaration** is hoisted.

The **assignment remains where it is.**

---

# JavaScript Execution Phases

Every JavaScript program executes in two phases.

## Phase 1: Memory Creation Phase

JavaScript scans the code.

It allocates memory for:

- Variables
- Functions

Nothing executes yet.

---

## Phase 2: Execution Phase

JavaScript executes code line by line.

Assignments happen.

Functions are called.

Expressions are evaluated.

---

# Example

```javascript
console.log(a);

var a = 10;

console.log(a);
```

### Memory Phase

```
a → undefined
```

### Execution Phase

```
console.log(a)
↓

undefined

↓

a = 10

↓

console.log(a)

↓

10
```

Output

```
undefined
10
```

---

# Hoisting with var

Variables declared using `var` are hoisted and initialized with `undefined`.

Example

```javascript
console.log(score);

var score = 100;
```

Output

```
undefined
```

Internal behavior

```javascript
var score;

console.log(score);

score = 100;
```

---

# Hoisting with let

`let` is also hoisted.

But it is **NOT initialized**.

Example

```javascript
console.log(age);

let age = 22;
```

Output

```
ReferenceError:
Cannot access 'age' before initialization
```

---

# Temporal Dead Zone (TDZ)

The time between:

- Variable declaration being hoisted
- Variable initialization

is called the **Temporal Dead Zone (TDZ).**

Example

```javascript
console.log(city);

let city = "Hyderabad";
```

Timeline

```
Program Starts
      ↓
Memory Created
      ↓
city exists
      ↓
TDZ
      ↓
Initialization
      ↓
city = "Hyderabad"
```

Accessing the variable during the TDZ causes a `ReferenceError`.

---

# Hoisting with const

`const` behaves like `let`.

Example

```javascript
console.log(PI);

const PI = 3.14;
```

Output

```
ReferenceError
```

`const` also lives in the TDZ until initialized.

---

# Comparison

| Keyword | Hoisted | Initial Value | Access Before Initialization |
| ------- | ------- | ------------- | ---------------------------- |
| var     | ✅      | undefined     | ✅ (undefined)               |
| let     | ✅      | Uninitialized | ❌ ReferenceError            |
| const   | ✅      | Uninitialized | ❌ ReferenceError            |

---

# Function Hoisting

Function declarations are completely hoisted.

Example

```javascript
greet();

function greet() {
  console.log("Hello");
}
```

Output

```
Hello
```

Memory Phase

```
greet()

↓

Entire function stored
```

Execution Phase

```
greet();
```

Works perfectly.

---

# Function Expression Hoisting

Example

```javascript
greet();

var greet = function () {
  console.log("Hello");
};
```

Output

```
TypeError:
greet is not a function
```

Why?

Memory phase

```
greet → undefined
```

Execution

```javascript
greet();
```

Equivalent to

```javascript
undefined();
```

Which throws a `TypeError`.

---

# Arrow Function Hoisting

```javascript
sayHello();

const sayHello = () => {
  console.log("Hello");
};
```

Output

```
ReferenceError
```

Arrow functions are **not callable before initialization** because `const` is in the TDZ.

---

# Another Example

```javascript
console.log(a);

var a = 5;

console.log(b);

let b = 10;
```

Output

```
undefined

ReferenceError
```

---

# Hoisting Order

Memory Creation

```
Functions
↓

Variables

↓

Execution
```

Functions are available immediately.

Variables depend on how they are declared.

---

# Hoisting Visualization

```text
Code

↓

Memory Creation Phase

↓

Functions Stored

↓

var → undefined

↓

let → TDZ

↓

const → TDZ

↓

Execution Phase

↓

Assignments

↓

Function Calls
```

---

# Common Interview Question

Predict the output.

```javascript
console.log(x);

var x = 5;
```

Output

```
undefined
```

---

Predict the output.

```javascript
console.log(x);

let x = 5;
```

Output

```
ReferenceError
```

---

Predict the output.

```javascript
hello();

function hello() {
  console.log("Hello");
}
```

Output

```
Hello
```

---

Predict the output.

```javascript
hello();

var hello = function () {
  console.log("Hello");
};
```

Output

```
TypeError
```

---

Predict the output.

```javascript
console.log(a);

var a = 1;

function a() {}

console.log(a);
```

Output

```
function a() {}

1
```

Reason:

Function declarations are hoisted before `var`.

---

# Common Mistakes

## Mistake 1

```javascript
console.log(total);

let total = 100;
```

Result

```
ReferenceError
```

---

## Mistake 2

```javascript
sum();

const sum = () => {};
```

Result

```
ReferenceError
```

---

## Mistake 3

```javascript
display();

var display = function () {};
```

Result

```
TypeError
```

---

# Best Practices

✅ Prefer `const`.

```javascript
const API_URL = "...";
```

---

✅ Use `let` for changing values.

---

❌ Avoid `var` in modern JavaScript.

---

✅ Declare variables before using them, even though hoisting exists.

---

# Interview Questions

### 1. What is Hoisting?

Hoisting is JavaScript's behavior of processing declarations before code execution.

---

### 2. Are `let` and `const` hoisted?

Yes.

They are hoisted but remain in the Temporal Dead Zone until initialized.

---

### 3. What is the Temporal Dead Zone?

The period between hoisting and initialization where accessing a `let` or `const` variable throws a `ReferenceError`.

---

### 4. Why does `var` return `undefined`?

Because `var` is initialized with `undefined` during the memory creation phase.

---

### 5. Why do function declarations work before they are written?

Because the entire function is hoisted into memory before execution.

---

### 6. Why don't arrow functions work before declaration?

Because they are usually assigned to `const` or `let`, which remain in the TDZ until initialized.

---

### 7. Difference between Function Declaration and Function Expression?

| Function Declaration        | Function Expression                |
| --------------------------- | ---------------------------------- |
| Fully hoisted               | Variable hoisted, function is not  |
| Callable before declaration | Not callable before initialization |

---

# Summary

You learned:

- ✅ What is Hoisting?
- ✅ Memory Creation Phase
- ✅ Execution Phase
- ✅ `var` Hoisting
- ✅ `let` Hoisting
- ✅ `const` Hoisting
- ✅ Temporal Dead Zone (TDZ)
- ✅ Function Hoisting
- ✅ Function Expression Hoisting
- ✅ Arrow Function Hoisting
- ✅ Common Mistakes
- ✅ Best Practices
- ✅ Interview Questions

---

# Practice Questions

## Easy

1. Predict the output:

```javascript
console.log(a);
var a = 10;
```

2. Predict the output:

```javascript
console.log(b);
let b = 20;
```

3. Call a function before its declaration.

---

## Medium

1. Compare `var`, `let`, and `const` hoisting with examples.
2. Explain the Temporal Dead Zone with code.
3. Write one example each for:
   - Function Declaration
   - Function Expression
   - Arrow Function

---

## Challenge

Without running the code, predict the output:

```javascript
console.log(a);

var a = 5;

function a() {
  return "Hello";
}

console.log(a);

let b = 10;

console.log(b);
```

Explain the result step by step using:

- Memory Creation Phase
- Execution Phase
- Hoisting
- TDZ
