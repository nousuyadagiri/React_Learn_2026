# Throttling.md (Part 1)

# JavaScript Throttling ⭐⭐⭐⭐⭐

Throttling is a performance optimization technique that limits how often a function can execute.

It is commonly used in:

- Infinite Scrolling
- Window Resize
- Mouse Move
- Scroll Events
- Button Clicks
- API Rate Limiting
- React Applications
- Frontend Interviews

---

# What is Throttling?

**Throttling** ensures that a function executes **at most once** during a specified time interval, even if the event is triggered many times.

### Simple Definition

> "Allow the function to execute only once every specified interval."

---

# Why Do We Need Throttling?

Some browser events fire **hundreds of times per second**.

Example:

```
Scroll

↓

Scroll

↓

Scroll

↓

Scroll

↓

Scroll
```

Without throttling:

```
Scroll Event

↓

Function

↓

Scroll Event

↓

Function

↓

Scroll Event

↓

Function

↓

Hundreds of Executions
```

This can:

- Slow down the browser
- Waste CPU
- Reduce FPS
- Make the UI laggy

---

# With Throttling

Suppose the interval is

```
1000 ms
```

Even if the user scrolls continuously,

```
Scroll

↓

Function Executes

↓

Ignore Events

↓

Ignore Events

↓

Ignore Events

↓

1000 ms Completed

↓

Function Executes Again
```

Only one execution per second.

---

# Real-Life Example

Imagine an ATM.

You try pressing the **Withdraw** button repeatedly.

```
Click

Click

Click

Click
```

The ATM processes only **one request at a time**.

After it finishes,

you can make another request.

This is similar to **Throttling**.

---

# Another Example

A security guard only allows one person to enter every 5 seconds.

```
Person 1 ✅

Person 2 ❌ Wait

Person 3 ❌ Wait

5 Seconds

↓

Person 4 ✅
```

---

# Where is Throttling Used?

- Infinite Scroll
- Scroll Progress Bar
- Mouse Move
- Drag & Drop
- Button Click Protection
- Window Resize
- API Rate Limiting
- Game Development

---

# Normal Event Flow

```
Mouse Move

↓

Function

↓

Mouse Move

↓

Function

↓

Mouse Move

↓

Function

↓

Mouse Move

↓

Function

↓

Hundreds of Calls
```

---

# Throttled Event Flow

```
Mouse Move

↓

Function Executes

↓

Ignore

↓

Ignore

↓

Ignore

↓

Delay Ends

↓

Function Executes Again
```

---

# Debouncing vs Throttling

## Debouncing

```
Typing

↓

Typing

↓

Typing

↓

Typing Stops

↓

Function Executes Once
```

---

## Throttling

```
Scroll

↓

Function

↓

Wait

↓

Function

↓

Wait

↓

Function
```

---

# Simple Rule

**Debouncing**

```
Execute

AFTER

the user stops.
```

**Throttling**

```
Execute

EVERY

fixed interval.
```

---

# How Throttling Works

When an event occurs:

1. Execute the function immediately.
2. Block future calls.
3. Wait for the delay.
4. Allow the next execution.

---

# Basic Throttle Logic

```javascript
let canRun = true;

function throttle() {

  if (!canRun) return;

  canRun = false;

  console.log("Executed");

  setTimeout(() => {
    canRun = true;
  }, 1000);

}
```

---

# Execution

```
Call

↓

Executed

↓

Blocked

↓

Blocked

↓

Blocked

↓

1 Second

↓

Allowed Again
```

---

# Complete Throttle Function

```javascript
function throttle(callback, delay) {

  let shouldWait = false;

  return function () {

    if (shouldWait) return;

    callback();

    shouldWait = true;

    setTimeout(() => {

      shouldWait = false;

    }, delay);

  };

}
```

---

# Understanding the Code

```javascript
let shouldWait = false;
```

Tracks whether the function can execute.

---

```javascript
if (shouldWait) return;
```

If the timer is active,

ignore the event.

---

```javascript
callback();
```

Execute immediately.

---

```javascript
setTimeout(...)
```

After the delay,

allow execution again.

---

# Example

```javascript
function throttle(callback, delay) {

  let shouldWait = false;

  return function () {

    if (shouldWait) return;

    callback();

    shouldWait = true;

    setTimeout(() => {

      shouldWait = false;

    }, delay);

  };

}

const print = throttle(() => {

  console.log("Hello");

}, 1000);

print();
print();
print();
print();
```

Output

```
Hello
```

Only the **first call** executes immediately.

The remaining calls during the next second are ignored.

---

# Scroll Example

```javascript
function throttle(callback, delay) {

  let shouldWait = false;

  return function () {

    if (shouldWait) return;

    callback();

    shouldWait = true;

    setTimeout(() => {

      shouldWait = false;

    }, delay);

  };

}

window.addEventListener(

  "scroll",

  throttle(() => {

    console.log("Scrolling...");

  }, 500)

);
```

Instead of executing hundreds of times,

the function executes only once every **500 ms**.

---

# Mouse Move Example

```javascript
document.addEventListener(

  "mousemove",

  throttle(() => {

    console.log("Mouse Moving");

  }, 1000)

);
```

Even if the mouse moves continuously,

the callback runs only once every second.

---

# Resize Example

```javascript
window.addEventListener(

  "resize",

  throttle(() => {

    console.log("Window Resized");

  }, 500)

);
```

Useful for recalculating layouts without overloading the browser.

---

# Timeline Visualization

```
Time →

0ms      200ms     400ms     600ms     800ms     1000ms

Scroll    Scroll    Scroll    Scroll    Scroll

↓

Execute

↓

Ignored

↓

Ignored

↓

Ignored

↓

Ignored

↓

1000ms

↓

Execute Again
```

---

# Advantages

✅ Better performance

✅ Reduces CPU usage

✅ Smooth scrolling

✅ Prevents UI lag

✅ Limits API requests

✅ Improves user experience

---

# Common Mistakes

## Mistake 1

Forgetting the flag.

```javascript
callback();
```

Without blocking,

the function executes every time.

---

## Mistake 2

Using throttle for a search box.

```
Typing

↓

Typing

↓

Typing
```

Search boxes usually need **Debouncing**, not Throttling.

---

## Mistake 3

Making the delay too long.

```
Delay = 5000 ms
```

The application may feel unresponsive.

Choose a reasonable interval such as:

- 100 ms
- 200 ms
- 300 ms
- 500 ms

depending on the use case.

---

# Best Practices

✅ Use throttling for high-frequency events.

Examples:

- Scroll
- Mouse Move
- Resize
- Drag

---

✅ Keep the delay appropriate.

---

✅ Use closures to preserve internal state.

---

# Summary (Part 1)

You learned:

- ✅ What is Throttling?
- ✅ Why Throttling is needed
- ✅ Real-world examples
- ✅ Debouncing vs Throttling
- ✅ Timeline diagrams
- ✅ Custom throttle function
- ✅ Scroll example
- ✅ Mouse Move example
- ✅ Resize example
- ✅ Common mistakes

---

# Practice Questions

## Easy

1. Create a throttle function with a 1000 ms delay.
2. Attach it to a button click.
3. Observe that only one click is processed every second.

---

## Medium

1. Throttle the window scroll event.
2. Throttle the mouse move event.
3. Explain why a flag such as `shouldWait` is required.
