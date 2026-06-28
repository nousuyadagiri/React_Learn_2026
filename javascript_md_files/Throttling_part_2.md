# Throttling.md (Part 2)

---

# Closures Behind Throttling ⭐⭐⭐⭐⭐

One of the most common interview questions is:

> **Why do we use a closure in a throttle function?**

Let's look at the throttle function.

```javascript
function throttle(callback, delay) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) return;

    callback(...args);

    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
```

Notice:

```javascript
let shouldWait = false;
```

Even after the `throttle()` function finishes executing,

the returned function still remembers the value of `shouldWait`.

This is possible because of **Closures**.

---

# Memory Visualization

```
throttle()

↓

shouldWait = false

↓

returns new function

↓

throttle() finished

↓

shouldWait still exists

↓

returned function

↓

callback()

↓

shouldWait = true

↓

1 second later

↓

shouldWait = false
```

Without closures,

`shouldWait` would disappear after the function finishes.

---

# API Rate Limiting Example

Suppose your API allows only

```
5 Requests / Second
```

Without throttling

```
Button Click

↓

API

↓

Button Click

↓

API

↓

Button Click

↓

API

↓

100 Requests
```

Server may reject requests.

---

With Throttling

```javascript
const sendRequest = throttle(() => {
  console.log("API Request");
}, 1000);
```

```
Click

↓

API

↓

Ignore

↓

Ignore

↓

Ignore

↓

1 Second

↓

API
```

Perfect for preventing excessive requests.

---

# Passing Arguments

A reusable throttle function should support arguments.

```javascript
function throttle(callback, delay) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) return;

    callback(...args);

    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
```

Usage

```javascript
const print = throttle((name) => {
  console.log(name);
}, 1000);

print("Nousu");
```

Output

```
Nousu
```

---

# Preserving `this`

If the callback is an object method,

use `apply()`.

```javascript
function throttle(callback, delay) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) return;

    callback.apply(this, args);

    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
```

This ensures both:

- `this`
- Arguments

are preserved.

---

# React Example (useRef)

```jsx
import { useRef } from "react";

function App() {
  const waiting = useRef(false);

  const handleScroll = () => {
    if (waiting.current) return;

    console.log("Scroll Event");

    waiting.current = true;

    setTimeout(() => {
      waiting.current = false;
    }, 500);
  };

  return <div onScroll={handleScroll}>Content</div>;
}
```

`useRef` stores the throttle flag without causing re-renders.

---

# React Example (Custom Hook)

```jsx
import { useCallback } from "react";

const throttledClick = useCallback(
  throttle(() => {
    console.log("Clicked");
  }, 1000),

  [],
);
```

This avoids creating a new throttled function on every render.

---

# requestAnimationFrame

Sometimes,

instead of `setTimeout()`,

we use

```javascript
requestAnimationFrame();
```

especially for:

- Scroll animations
- Canvas
- Games
- Smooth UI updates

Example

```javascript
let waiting = false;

window.addEventListener("scroll", () => {
  if (waiting) return;

  waiting = true;

  requestAnimationFrame(() => {
    console.log("Update UI");

    waiting = false;
  });
});
```

This synchronizes updates with the browser's repaint cycle.

---

# Lodash Throttle

Lodash provides a ready-made throttle function.

```javascript
import throttle from "lodash/throttle";

const update = throttle(() => {
  console.log("Updating...");
}, 500);
```

Advantages

- Well tested
- Leading option
- Trailing option
- Cancel support
- Flush support

---

# Real-World Uses

### Infinite Scroll

```
Scroll

↓

Load More Products

↓

Wait

↓

Scroll

↓

Load More Products
```

---

### Scroll Progress Bar

```
Scrolling

↓

Update Progress

↓

Wait

↓

Update Again
```

---

### Mouse Tracking

```
Mouse Move

↓

Update Coordinates

↓

Wait

↓

Update Again
```

---

### Drag and Drop

```
Dragging

↓

Update Position

↓

Wait

↓

Update Position
```

---

### Prevent Double Click

```
Click

↓

Submit Form

↓

Ignore Extra Clicks

↓

Allow Again
```

---

# Debouncing vs Throttling

| Feature         | Debouncing             | Throttling                            |
| --------------- | ---------------------- | ------------------------------------- |
| Execution       | After user stops       | At fixed intervals                    |
| Best For        | Search, Auto Save      | Scroll, Resize, Mouse Move            |
| API Calls       | Only last call         | Multiple calls at intervals           |
| User Experience | Waits before executing | Executes continuously but with limits |

---

# Common Mistakes

## Mistake 1

Creating the throttle function inside the event handler.

```javascript
button.addEventListener("click", () => {
  throttle(callback, 1000);
});
```

Wrong ❌

A new throttle function is created every click.

---

Correct

```javascript
const throttled = throttle(callback, 1000);

button.addEventListener("click", throttled);
```

---

## Mistake 2

Using throttling for search inputs.

Search boxes usually require **Debouncing** because users expect results only after they finish typing.

---

## Mistake 3

Ignoring `this`

If throttling object methods,

use

```javascript
callback.apply(this, args);
```

---

# Best Practices

✅ Keep the throttle flag inside the closure.

---

✅ Preserve `this` with `apply()`.

---

✅ Preserve arguments with `...args`.

---

✅ Use throttling for high-frequency events.

---

# Interview Questions

### 1. What is Throttling?

Throttling limits how often a function can execute during a given time interval.

---

### 2. Why is Throttling used?

- Improve performance
- Reduce CPU usage
- Limit API requests
- Smooth scrolling

---

### 3. Which browser events commonly use throttling?

- Scroll
- Mouse Move
- Resize
- Drag

---

### 4. Why are closures required?

Closures preserve the internal state (`shouldWait`) between function calls.

---

### 5. Difference between Debouncing and Throttling?

Debouncing waits until the event stops.

Throttling executes at regular intervals while the event continues.

---

### 6. Why use `requestAnimationFrame()`?

It synchronizes updates with the browser's repaint cycle, making animations smoother.

---

# Summary

You learned:

- ✅ Closures in Throttling
- ✅ API Rate Limiting
- ✅ Passing Arguments
- ✅ Preserving `this`
- ✅ React (`useRef`, `useCallback`)
- ✅ `requestAnimationFrame()`
- ✅ Lodash `throttle`
- ✅ Debouncing vs Throttling
- ✅ Common Mistakes
- ✅ Best Practices
- ✅ Interview Questions

---

# Practice Questions

## Easy

1. Create a throttle function with a 500 ms delay.
2. Attach it to a scroll event.
3. Observe that it executes at most once every 500 ms.

---

## Medium

1. Build a throttled mouse tracker.
2. Build a throttled button click handler.
3. Explain how closures preserve the `shouldWait` flag.

---

## Hard

1. Build a reusable throttle utility that:
   - Accepts any callback
   - Accepts any number of arguments (`...args`)
   - Preserves `this`
   - Supports different delays

2. Build an infinite scrolling page using throttling.

3. Compare Debouncing and Throttling with practical examples and explain which one you would choose for:
   - Search input
   - Window resize
   - Infinite scroll
   - Drag-and-drop

---

# Throttling Flow Diagram

```text
Event Triggered

↓

Is Waiting?

│

├── Yes
│     ↓
│  Ignore Event
│
└── No
      ↓
Execute Callback
      ↓
Set Waiting = true
      ↓
Start Timer
      ↓
Delay Completed
      ↓
Set Waiting = false
      ↓
Ready for Next Execution
```

---

# Final Interview Tip ⭐⭐⭐⭐⭐

A strong interview answer is:

> **Throttling is a performance optimization technique that ensures a function executes at most once during a specified time interval, regardless of how many times the event is triggered. It is commonly implemented using closures, a flag, and `setTimeout()`, and is ideal for high-frequency events such as scrolling, resizing, and mouse movement.**
