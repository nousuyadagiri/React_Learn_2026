# Scope.md

# JavaScript Scope ⭐⭐⭐⭐⭐

Scope is one of the most important concepts in JavaScript.

It determines **where variables can be accessed** in your code.

Understanding scope is essential for:

- Functions
- Closures
- Hoisting
- `this`
- React
- JavaScript Interviews

---

# What is Scope?

**Scope** defines the visibility and accessibility of variables.

Think of scope as a **boundary**.

A variable declared inside one scope may not be accessible outside that scope.

---

# Why Do We Need Scope?

Imagine every variable in your program was global.

```javascript
let name = "John";
let age = 20;
let score = 95;
let total = 100;
```

As your application grows, variables may overwrite each other.

Scope prevents this problem.

Benefits:

- Prevents variable conflicts
- Keeps code organized
- Improves security
- Makes debugging easier

---

# Types of Scope

JavaScript has three main types of scope:

1. Global Scope
2. Function Scope
3. Block Scope

---

# 1. Global Scope

A variable declared outside all functions and blocks is called a **global variable**.

It can be accessed from anywhere.

Example

```javascript
let company = "OpenAI";

function showCompany() {
  console.log(company);
}

console.log(company);

showCompany();
```

Output

```
OpenAI
OpenAI
```

The variable `company` is available everywhere.

---

## Another Example

```javascript
const appName = "My App";

function home() {
  console.log(appName);
}

function profile() {
  console.log(appName);
}

home();
profile();
```

Output

```
My App
My App
```

---

# Problems with Global Variables

Too many global variables can create bugs.

Example

```javascript
let count = 10;

function increase() {
  count++;
}

function reset() {
  count = 0;
}
```

Any function can change `count`.

Avoid unnecessary global variables.

---

# 2. Function Scope

Variables declared with `var`, `let`, or `const` inside a function are only accessible inside that function.

Example

```javascript
function greet() {
  let message = "Hello";
  console.log(message);
}

greet();

// console.log(message); ❌ Error
```

Output

```
Hello
ReferenceError
```

---

## Another Example

```javascript
function add() {
  let a = 10;
  let b = 20;

  console.log(a + b);
}

add();
```

Output

```
30
```

Outside the function:

```javascript
console.log(a);
```

Output

```
ReferenceError
```

---

# Local Variables

Variables inside functions are called **local variables**.

```javascript
function demo() {
  let name = "Nousu";
}
```

`name` exists only inside `demo()`.

---

# 3. Block Scope

A block is anything inside `{ }`.

Variables declared with `let` and `const` are block-scoped.

Example

```javascript
{
  let age = 22;
  console.log(age);
}
```

Output

```
22
```

Outside the block

```javascript
console.log(age);
```

Output

```
ReferenceError
```

---

## const is also Block Scoped

```javascript
{
  const PI = 3.14;
  console.log(PI);
}
```

Output

```
3.14
```

Outside

```javascript
console.log(PI);
```

Output

```
ReferenceError
```

---

# var is NOT Block Scoped

```javascript
{
  var city = "Hyderabad";
}

console.log(city);
```

Output

```
Hyderabad
```

This surprises many beginners.

`var` ignores block scope and is only function-scoped.

---

# Example

```javascript
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a);

// console.log(b); ❌
// console.log(c); ❌
```

Output

```
10
ReferenceError
ReferenceError
```

---

# Scope Chain

JavaScript searches for variables from the **current scope outward**.

Example

```javascript
let country = "India";

function outer() {
  let state = "Telangana";

  function inner() {
    let city = "Hyderabad";

    console.log(country);
    console.log(state);
    console.log(city);
  }

  inner();
}

outer();
```

Output

```
India
Telangana
Hyderabad
```

Search order

```
Current Scope
      ↓
Parent Scope
      ↓
Global Scope
```

This is called the **Scope Chain**.

---

# Lexical Scope

Functions can access variables from where they are **defined**, not where they are called.

Example

```javascript
let language = "JavaScript";

function outer() {
  function inner() {
    console.log(language);
  }

  inner();
}

outer();
```

Output

```
JavaScript
```

Closures are based on lexical scope.

---

# Variable Shadowing

A local variable can hide a global variable with the same name.

```javascript
let name = "Global";

function demo() {
  let name = "Local";
  console.log(name);
}

demo();

console.log(name);
```

Output

```
Local
Global
```

The local variable **shadows** the global variable.

---

# Nested Functions

```javascript
function parent() {
  let parentVar = "Parent";

  function child() {
    let childVar = "Child";

    console.log(parentVar);
    console.log(childVar);
  }

  child();
}

parent();
```

Output

```
Parent
Child
```

---

# Can Parent Access Child Variables?

No.

```javascript
function parent() {
  function child() {
    let secret = "Hidden";
  }

  child();

  console.log(secret);
}

parent();
```

Output

```
ReferenceError
```

Parent functions cannot access variables declared inside child functions.

---

# Scope Visualization

```
Global Scope
│
├── company
├── appName
│
└── Function Scope
     │
     ├── message
     ├── total
     │
     └── Block Scope
          │
          ├── age
          ├── PI
```

---

# Best Practices

✅ Prefer `const` whenever possible.

```javascript
const API_URL = "...";
```

---

✅ Use `let` if the value changes.

```javascript
let count = 0;
```

---

❌ Avoid `var`.

```javascript
var x = 10;
```

Modern JavaScript rarely uses `var`.

---

✅ Keep variables in the smallest scope possible.

Instead of

```javascript
let total = 0;
```

Declare it only where needed.

---

# Common Mistakes

## Mistake 1

```javascript
if (true) {
  let x = 10;
}

console.log(x);
```

Output

```
ReferenceError
```

---

## Mistake 2

```javascript
if (true) {
  var x = 10;
}

console.log(x);
```

Output

```
10
```

---

## Mistake 3

```javascript
function demo() {
  let a = 5;
}

console.log(a);
```

Output

```
ReferenceError
```

---

# Interview Questions

### 1. What is Scope?

Scope defines where variables can be accessed.

---

### 2. Types of Scope?

- Global Scope
- Function Scope
- Block Scope

---

### 3. Difference between Function Scope and Block Scope?

| Function Scope          | Block Scope                |
| ----------------------- | -------------------------- |
| Exists inside functions | Exists inside `{}`         |
| `var` uses this         | `let` and `const` use this |

---

### 4. Is `var` block scoped?

No.

It is function scoped.

---

### 5. What is Variable Shadowing?

When a local variable has the same name as a global variable, the local variable hides (shadows) the global one.

---

### 6. What is Scope Chain?

JavaScript searches for variables from the current scope outward to parent scopes until it reaches the global scope.

---

### 7. What is Lexical Scope?

Functions can access variables from the scope where they were created.

Closures rely on lexical scope.

---

# Summary

You learned:

- ✅ Scope
- ✅ Global Scope
- ✅ Function Scope
- ✅ Block Scope
- ✅ Scope Chain
- ✅ Lexical Scope
- ✅ Variable Shadowing
- ✅ Nested Functions
- ✅ Best Practices
- ✅ Common Mistakes
- ✅ Interview Questions

---

# Practice Questions

## Easy

1. Create one global variable and access it inside two functions.
2. Declare a variable inside a function and try accessing it outside.
3. Use `let` inside an `if` block and test its scope.
4. Use `var` inside an `if` block and compare the result.

---

## Medium

1. Create nested functions and access parent variables.
2. Demonstrate variable shadowing with global and local variables.
3. Explain the output of a scope chain example.

---

## Challenge

Build a simple banking example:

- Global variable: `bankName`
- Function: `createAccount()`
- Inside it, create `accountNumber`
- Inside another nested function, create `transactionId`

Print all accessible variables at each level and identify which variables are **not** accessible due to scope.
