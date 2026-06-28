# Closures.md

# JavaScript Closures 🔒⭐⭐⭐⭐⭐

Closures are one of the most powerful and frequently asked JavaScript interview concepts.

If you understand closures, you'll also understand:

- Scope
- Lexical Environment
- Data Privacy
- Callbacks
- Event Handlers
- React Hooks
- Memoization
- Higher-Order Functions

---

# What is a Closure?

A **closure** is created when an **inner function remembers and can access the variables of its outer function even after the outer function has finished executing.**

### Simple Definition

> **A closure is a function bundled together with its lexical environment.**

---

# Why Do Closures Exist?

Normally, when a function finishes execution, its local variables are removed from memory.

Example

```javascript
function test() {
  let message = "Hello";
}

test();

// message no longer exists
```

But if an inner function still needs those variables, JavaScript **keeps them alive**.

This preserved environment is called a **closure**.

---

# Lexical Scope

Closures are based on **lexical scope**.

Lexical scope means:

> A function can access variables from where it was **defined**, not where it is **called**.

Example

```javascript
let language = "JavaScript";

function outer() {
  console.log(language);
}

outer();
```

Output

```
JavaScript
```

`outer()` can access `language` because it was defined in that scope.

---

# First Closure Example

```javascript
function outer() {
  let message = "Hello World";

  function inner() {
    console.log(message);
  }

  return inner;
}

const greet = outer();

greet();
```

Output

```
Hello World
```

---

# What Happened?

Step 1

```javascript
outer();
```

Creates

```
message = "Hello World"
```

---

Step 2

Returns

```javascript
inner;
```

---

Step 3

Normally,

```
outer()
```

would disappear from memory.

But...

`inner()` still needs `message`.

So JavaScript keeps

```
message = "Hello World"
```

alive.

That is a **Closure**.

---

# Memory Visualization

```
outer()

message = "Hello"

↓

returns inner()

↓

outer finished

↓

message still exists

↓

inner()

↓

Hello
```

---

# Example 2

```javascript
function parent() {
  let count = 10;

  return function () {
    console.log(count);
  };
}

const child = parent();

child();
```

Output

```
10
```

---

# Example 3

```javascript
function greeting(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

const welcome = greeting("Nousu");

welcome();
```

Output

```
Hello Nousu
```

Notice:

`name` still exists even after `greeting()` has finished.

---

# Closures Remember Updated Values

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;

    console.log(count);
  };
}

const increment = counter();

increment();
increment();
increment();
```

Output

```
1
2
3
```

`count` is **not recreated** every time.

It is remembered by the closure.

---

# Multiple Closures

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2());

console.log(counter1());
```

Output

```
1
2
1
3
```

Each closure has **its own private state**.

---

# Data Privacy Using Closures

Closures allow you to create **private variables**.

```javascript
function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },

    withdraw(amount) {
      balance -= amount;
      console.log(balance);
    },
  };
}

const account = bankAccount();

account.deposit(500);

account.withdraw(200);
```

Output

```
1500
1300
```

Can we access `balance` directly?

```javascript
console.log(account.balance);
```

Output

```
undefined
```

The variable is **private**.

---

# Real-World Counter

```javascript
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },

    decrement() {
      count--;
      return count;
    },

    reset() {
      count = 0;
      return count;
    },
  };
}

const counter = createCounter();

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.decrement());

console.log(counter.reset());
```

Output

```
1
2
1
0
```

---

# Closures in Event Listeners

```javascript
function clickHandler() {
  let clicks = 0;

  return function () {
    clicks++;

    console.log(`Clicked ${clicks} times`);
  };
}

const buttonClick = clickHandler();

buttonClick();

buttonClick();

buttonClick();
```

Output

```
Clicked 1 times
Clicked 2 times
Clicked 3 times
```

---

# Closures with setTimeout

```javascript
function timer() {
  let message = "Time's up!";

  setTimeout(function () {
    console.log(message);
  }, 2000);
}

timer();
```

Output after 2 seconds

```
Time's up!
```

Even after `timer()` finishes, the callback remembers `message`.

---

# Common Interview Question

## Predict the Output

```javascript
function outer() {
  let x = 5;

  return function () {
    console.log(x);
  };
}

const fn = outer();

fn();
```

Output

```
5
```

---

## Predict the Output

```javascript
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const fn = outer();

fn();

fn();

fn();
```

Output

```
1
2
3
```

---

# Common Mistake

Using `var` in a loop.

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

Output

```
4
4
4
```

Why?

`var` is function-scoped.

All callbacks share the **same** variable.

---

# Correct Version Using let

```javascript
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

Output

```
1
2
3
```

`let` creates a **new binding** for each iteration.

---

# Advantages of Closures

- Preserve state
- Data privacy
- Encapsulation
- Function factories
- Memoization
- Event handlers
- Callbacks
- React Hooks

---

# Disadvantages

- Can consume extra memory if closures keep large objects alive.
- Overusing closures may make debugging harder.

---

# Real-World Uses

- Private variables
- Counters
- Authentication
- Shopping carts
- React Hooks (`useState`, `useMemo`, `useCallback`)
- Debouncing
- Throttling
- Memoization
- Event listeners

---

# Interview Questions

### 1. What is a closure?

A closure is a function that remembers variables from its outer lexical scope even after the outer function has finished executing.

---

### 2. Why are closures useful?

They allow:

- Data hiding
- Private variables
- State preservation
- Function factories
- Memoization

---

### 3. What is lexical scope?

Lexical scope means a function can access variables from the scope where it was **defined**, not where it is called.

---

### 4. Can closures cause memory leaks?

Yes. If a closure holds references to objects that are no longer needed, those objects cannot be garbage-collected until the closure itself becomes unreachable.

---

### 5. Where are closures used in React?

Closures are used extensively in:

- `useState`
- `useEffect`
- `useCallback`
- `useMemo`
- Event handlers
- Custom hooks

---

# Summary

You learned:

- ✅ What is a Closure?
- ✅ Lexical Scope
- ✅ How Closures Work
- ✅ Memory Visualization
- ✅ Counter Example
- ✅ Data Privacy
- ✅ Event Listeners
- ✅ `setTimeout`
- ✅ Common `var` Loop Pitfall
- ✅ Advantages
- ✅ Disadvantages
- ✅ React Use Cases
- ✅ Interview Questions

---

# Practice Questions

### Easy

1. Create a function that returns another function which prints your name.
2. Build a counter using a closure.
3. Create a greeting function that remembers the user's name.

### Medium

1. Build a bank account with private `deposit` and `withdraw` methods.
2. Create a score tracker that only exposes methods to update the score.
3. Fix the `var` loop example so it prints `1 2 3`.

### Challenge

Build a **Todo Manager** using closures:

- `addTodo(todo)`
- `removeTodo(index)`
- `listTodos()`

The internal todo array must remain **private**, accessible only through these methods.
