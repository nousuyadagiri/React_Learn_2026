# 14.1-this-keyword-basics.md

# JavaScript `this` Keyword ⭐⭐⭐⭐⭐

The `this` keyword is one of the most confusing topics in JavaScript and one of the **most frequently asked interview questions**.

Understanding `this` is essential for:

* Objects
* Functions
* Classes
* React
* Event Handlers
* `call()`, `apply()`, `bind()`

---

# What is `this`?

`this` is a special keyword that **refers to an object**.

The value of `this` **depends on how a function is called**, not where it is written.

> **Golden Rule:** `this` is determined at **call time**, not at **definition time** (except for arrow functions).

---

# Why Do We Need `this`?

Without `this`, object methods wouldn't know which object they belong to.

Example

```javascript
const user = {
  name: "Nousu",

  greet() {
    console.log(`Hello ${this.name}`);
  }
};

user.greet();
```

Output

```
Hello Nousu
```

Here, `this` refers to the `user` object.

---

# How `this` Works

Think of `this` as asking:

> "Who called me?"

Whoever calls the function becomes the value of `this`.

---

# Rule 1: Global Context

### Browser

```javascript
console.log(this);
```

Output

```
Window {...}
```

In browsers, `this` in the global scope refers to the **Window** object.

---

### Node.js

```javascript
console.log(this);
```

Output

```
{}
```

In Node.js modules, the top-level `this` is the module object (not `global`).

---

# Rule 2: Inside a Regular Function

### Non-Strict Mode (Browser)

```javascript
function show() {
  console.log(this);
}

show();
```

Output

```
Window
```

---

### Strict Mode

```javascript
"use strict";

function show() {
  console.log(this);
}

show();
```

Output

```
undefined
```

Strict mode prevents JavaScript from automatically binding `this` to the global object.

---

# Rule 3: Object Methods

When a function is called as an object method, `this` refers to that object.

```javascript
const person = {
  name: "Nousu",

  greet() {
    console.log(this.name);
  }
};

person.greet();
```

Output

```
Nousu
```

---

# Another Example

```javascript
const car = {
  brand: "BMW",

  start() {
    console.log(`${this.brand} started`);
  }
};

car.start();
```

Output

```
BMW started
```

---

# Two Different Objects

```javascript
const user1 = {
  name: "John",

  greet() {
    console.log(this.name);
  }
};

const user2 = {
  name: "David",

  greet() {
    console.log(this.name);
  }
};

user1.greet();
user2.greet();
```

Output

```
John
David
```

The same method works for different objects because `this` depends on the caller.

---

# Store Method in a Variable

```javascript
const person = {
  name: "Nousu",

  greet() {
    console.log(this.name);
  }
};

const sayHello = person.greet;

sayHello();
```

Output (strict mode)

```
undefined
```

Output (browser non-strict)

```
undefined
```

Why?

The function is no longer called as `person.greet()`.

It is simply called as `sayHello()`.

So the object context is lost.

---

# Nested Objects

```javascript
const company = {
  name: "OpenAI",

  employee: {
    name: "Nousu",

    show() {
      console.log(this.name);
    }
  }
};

company.employee.show();
```

Output

```
Nousu
```

`this` refers to the object before the dot.

---

# Dynamic Nature of `this`

```javascript
function show() {
  console.log(this.name);
}

const userA = {
  name: "Alice",
  show
};

const userB = {
  name: "Bob",
  show
};

userA.show();
userB.show();
```

Output

```
Alice
Bob
```

The same function behaves differently depending on the caller.

---

# Common Mistake 1

```javascript
const person = {
  name: "Nousu",

  greet: function () {

    function inner() {
      console.log(this.name);
    }

    inner();
  }
};

person.greet();
```

Output (strict mode)

```
TypeError / undefined
```

`inner()` is a regular function call, so it doesn't inherit the object's `this`.

We'll solve this with arrow functions in Part 2.

---

# Common Mistake 2

```javascript
const person = {
  name: "Nousu",

  greet() {
    console.log(name);
  }
};

person.greet();
```

Output

```
ReferenceError
```

Correct

```javascript
console.log(this.name);
```

---

# `this` Is NOT the Function

Wrong idea:

```javascript
this === function
```

Correct idea:

```
this
↓

caller object
```

---

# Summary Table

| Where is the function called?         | Value of `this`                 |
| ------------------------------------- | ------------------------------- |
| Global scope (Browser)                | `window`                        |
| Global scope (Node module)            | `{}`                            |
| Regular function (non-strict browser) | `window`                        |
| Regular function (strict mode)        | `undefined`                     |
| Object method                         | The object before the dot (`.`) |

---

# Best Practices

✅ Use `this` only inside object methods when referring to object properties.

```javascript
const user = {
  name: "Nousu",

  greet() {
    console.log(this.name);
  }
};
```

---

❌ Don't rely on global `this`.

---

✅ Use strict mode in modern JavaScript.

---

# Interview Questions

### 1. What is `this`?

`this` is a keyword that refers to an object. Its value depends on how a function is invoked.

---

### 2. Is `this` decided when the function is written?

No.

It is decided **when the function is called**.

---

### 3. What does `this` refer to in an object method?

The object that called the method.

---

### 4. What is `this` inside a regular function in strict mode?

`undefined`.

---

### 5. Why does storing an object method in a variable change `this`?

Because the function is no longer called as a method of the original object, so it loses its object context.

---

# Practice Questions

## Easy

1. Create an object with a `name` property and a method that prints it using `this`.
2. Create two objects that share the same function and observe how `this` changes.
3. Print `this` in the global scope and inside a regular function.

---

## Medium

1. Explain the output:

```javascript
const user = {
  name: "Sam",
  show() {
    console.log(this.name);
  }
};

const fn = user.show;

fn();
```

2. Create nested objects and identify what `this` refers to.

3. Compare the value of `this` in strict mode and non-strict mode.

---

