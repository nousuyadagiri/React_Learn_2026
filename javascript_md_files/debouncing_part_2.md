# Debouncing.md (Part 2)

---

# Closures Behind Debouncing ⭐⭐⭐⭐⭐

One of the most common interview questions is:

> **Why does the debounce function use a closure?**

Let's understand.

Our debounce function:

```javascript
function debounce(callback, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}
```

Notice:

```javascript
let timer;
```

The returned function continues to access `timer` even after `debounce()` has finished executing.

That is possible because of **closures**.

---

## Memory Visualization

```
debounce()

↓

timer = undefined

↓

returns new function

↓

debounce() finished

↓

timer still exists

↓

returned function

↓

clearTimeout(timer)

↓

setTimeout()

↓

timer updated
```

Without closures, the `timer` variable would disappear after `debounce()` finishes.

---

# Why Does Debouncing Work?

Suppose the delay is:

```
500 ms
```

User typing speed:

```
H

100 ms

Ha

100 ms

Har

100 ms

Hari

100 ms

Haris

100 ms

Harish
```

Each key press occurs before 500 ms.

Every new key press:

```
↓

Cancels Previous Timer

↓

Starts New Timer
```

Only after the user stops typing for 500 ms:

```
↓

API Call
```

---

# API Search Example

Without Debouncing

```javascript
searchInput.addEventListener("keyup", () => {
  fetch("/search");
});
```

Typing

```
React
```

Generates

```
R

↓

API

↓

Re

↓

API

↓

Rea

↓

API

↓

Reac

↓

API

↓

React

↓

API
```

Total

```
5 Requests
```

---

With Debouncing

```javascript
const search = debounce(() => {
  fetch("/search");
}, 500);

searchInput.addEventListener("keyup", search);
```

Typing

```
React

↓

Wait 500 ms

↓

One API Request
```

---

# Fetch Example

```javascript
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const search = debounce(async (event) => {
  const value = event.target.value;

  console.log("Searching:", value);

  // Example:
  // const response = await fetch(`/search?q=${value}`);
}, 500);

document.getElementById("search").addEventListener("keyup", search);
```

Notice:

```javascript
(...args)
```

This allows the event object to be forwarded to the callback.

---

# Why Use `...args`?

Without it:

```javascript
callback();
```

The callback would lose its arguments.

With it:

```javascript
callback(...args);
```

All arguments are preserved.

---

# React Example (useEffect)

```jsx
import { useState, useEffect } from "react";

function Search() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Searching:", query);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

How it works:

```
Typing

↓

State Changes

↓

Old Timer Cleared

↓

New Timer Starts

↓

User Stops

↓

Search Executes
```

---

# React Example (Custom Debounce)

```javascript
function debounce(callback, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
```

Usage

```javascript
const search = debounce((text) => {
  console.log(text);
}, 500);

search("React");
```

---

# React useCallback Example

```jsx
const debouncedSearch = useCallback(
  debounce((text) => {
    console.log(text);
  }, 500),

  [],
);
```

This prevents creating a new debounced function on every render.

---

# Debouncing vs Normal Execution

Normal

```
Input

↓

Function

↓

Input

↓

Function

↓

Input

↓

Function

↓

Input

↓

Function
```

Debounced

```
Input

↓

Timer

↓

Input

↓

Reset Timer

↓

Input

↓

Reset Timer

↓

Stop

↓

Function Executes Once
```

---

# Lodash Debounce

Lodash provides a ready-made debounce function.

```javascript
import debounce from "lodash/debounce";

const search = debounce(() => {
  console.log("Searching...");
}, 500);
```

Advantages:

- Well-tested
- Supports leading/trailing execution
- Cancel method
- Flush method

---

# Real-World Uses

### Search Box

```
Google

YouTube

Amazon
```

---

### Auto Save

```
Typing Notes

↓

Wait

↓

Save Draft
```

---

### Username Validation

```
Typing Username

↓

Wait

↓

Check Availability
```

---

### Window Resize

```
Resize

↓

Resize

↓

Resize

↓

Resize Stops

↓

Update Layout
```

---

### Live Filtering

```
Typing

↓

Wait

↓

Filter Products
```

---

# Common Mistakes

## Mistake 1

```javascript
let timer;

function debounce() {}
```

Creating `timer` globally.

Problem:

All debounced functions share the same timer.

Instead:

```javascript
function debounce() {
  let timer;
}
```

Each debounced function gets its own private timer.

---

## Mistake 2

```javascript
callback();
```

If your callback expects arguments, they are lost.

Correct

```javascript
callback(...args);
```

---

## Mistake 3

```javascript
setTimeout(callback(), 500);
```

Wrong.

`callback()` executes immediately.

Correct

```javascript
setTimeout(callback, 500);
```

---

# Best Practices

✅ Keep `timer` inside the closure.

---

✅ Use `clearTimeout()` before creating a new timer.

---

✅ Pass arguments using `...args`.

---

✅ Use debouncing only when delayed execution is acceptable.

---

# Interview Questions

### 1. What is Debouncing?

Debouncing delays function execution until the user stops triggering the event for a specified time.

---

### 2. Why is Debouncing used?

- Reduce API requests
- Improve performance
- Save bandwidth
- Improve user experience

---

### 3. Which functions are used to implement Debouncing?

- `setTimeout()`
- `clearTimeout()`

---

### 4. Why are Closures required?

Closures preserve the `timer` variable between function calls.

---

### 5. Where is Debouncing commonly used?

- Search bars
- Auto-complete
- Window resize
- Form validation
- Auto-save
- Live filtering

---

### 6. Does Debouncing execute immediately?

No.

It waits until the user stops triggering the event.

---

### 7. What is the difference between Debouncing and Throttling?

Debouncing executes **after the last event**.

Throttling executes **at fixed intervals**.

---

# Summary

You learned:

- ✅ Closures in Debouncing
- ✅ API Search Optimization
- ✅ React Debouncing
- ✅ useEffect Example
- ✅ useCallback Example
- ✅ Passing Arguments
- ✅ Lodash Debounce
- ✅ Common Mistakes
- ✅ Best Practices
- ✅ Interview Questions

---

# Practice Questions

## Easy

1. Create a debounce function with a 500 ms delay.
2. Attach it to a search input.
3. Log the input value after typing stops.

---

## Medium

1. Debounce a window resize event.
2. Create a debounced API search function.
3. Explain how closures preserve the `timer`.

---

## Hard

1. Build a reusable debounce utility that:
   - Accepts any callback
   - Accepts any number of arguments (`...args`)
   - Preserves `this`
   - Allows different delays

2. Create a React search component using your debounce function.

3. Explain the entire execution flow of a debounce function from:
   - Event Trigger
   - Closure
   - `clearTimeout()`
   - `setTimeout()`
   - Callback Execution

---

# Debouncing Flow Diagram

```text
User Types

↓

Event Triggered

↓

clearTimeout(previousTimer)

↓

setTimeout(newTimer)

↓

User Types Again?

│

├── Yes
│     ↓
│  Cancel Timer
│     ↓
│  Start New Timer
│
└── No
      ↓
Delay Completed
      ↓
Execute Callback
```

---

# Final Interview Tip ⭐⭐⭐⭐⭐

A strong interview answer is:

> **Debouncing is a performance optimization technique that delays the execution of a function until a specified period has passed without any new events. It is commonly implemented using `setTimeout()`, `clearTimeout()`, and closures to reduce unnecessary function executions, such as API calls while typing in a search box.**
