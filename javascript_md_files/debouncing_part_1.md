# Debouncing.md (Part 1)

# JavaScript Debouncing ⭐⭐⭐⭐⭐

Debouncing is one of the most important JavaScript concepts for improving application performance.

It is widely used in:

- Search Bars
- Auto Suggestions
- API Calls
- Window Resize
- Input Validation
- React Applications
- Frontend Interviews

---

# What is Debouncing?

**Debouncing** is a technique that delays the execution of a function until the user stops triggering an event for a specified amount of time.

### Simple Definition

> "Execute the function only after the user has stopped performing an action."

---

# Why Do We Need Debouncing?

Imagine a search box.

```text
User types:

H
Ha
Har
Hari
Haris
Harish
```

Without debouncing,

Every key press sends an API request.

```
H  → API Call ❌

Ha → API Call ❌

Har → API Call ❌

Hari → API Call ❌

Haris → API Call ❌

Harish → API Call ❌
```

Total API calls

```
6 Requests
```

This wastes:

- Internet bandwidth
- Server resources
- Browser performance

---

With Debouncing

```
H

Ha

Har

Hari

Haris

Harish

(wait 500ms)

↓

One API Call ✅
```

Only

```
1 Request
```

Huge performance improvement.

---

# Real Life Example

Imagine pressing an elevator button.

```
Press

Press

Press

Press

Press
```

The elevator doesn't come five times.

It waits until everyone finishes pressing.

Then

```
↓

One Elevator Arrives
```

That's Debouncing.

---

# Another Real Life Example

Google Search

```
Typing...

J

Ja

Jav

Java

JavaS

JavaSc

JavaScr

JavaScript

↓

Wait...

↓

Results Appear
```

Google doesn't search after every letter.

---

# Where is Debouncing Used?

- Search Inputs
- Search Suggestions
- Auto Complete
- Window Resize
- Input Validation
- Saving Drafts
- API Requests
- Form Validation

---

# Normal Event Flow

```
User Types

↓

A

↓

Function Executes

↓

B

↓

Function Executes

↓

C

↓

Function Executes

↓

D

↓

Function Executes

↓

4 Executions
```

---

# Debounced Event Flow

```
User Types

↓

A

↓

Timer Starts

↓

B

↓

Old Timer Cancelled

↓

New Timer Starts

↓

C

↓

Old Timer Cancelled

↓

New Timer Starts

↓

User Stops

↓

Timer Completes

↓

Function Executes Once
```

---

# How Debouncing Works

Every time the event occurs,

1. Cancel previous timer.
2. Start a new timer.
3. Wait.
4. If no new event occurs,
5. Execute the function.

---

# setTimeout()

Debouncing is built using

```javascript
setTimeout()
```

Example

```javascript
setTimeout(() => {
  console.log("Hello");
}, 2000);
```

Output after 2 seconds

```
Hello
```

---

# clearTimeout()

Cancels an existing timer.

Example

```javascript
const timer = setTimeout(() => {
  console.log("Hello");
}, 2000);

clearTimeout(timer);
```

Output

```
Nothing
```

Because the timer was cancelled.

---

# Basic Debouncing Logic

```javascript
let timer;

function search() {

  clearTimeout(timer);

  timer = setTimeout(() => {
    console.log("Searching...");
  }, 1000);

}
```

Every call resets the timer.

---

# Execution

```
search()

↓

Timer Starts

↓

search()

↓

Old Timer Cancelled

↓

New Timer Starts

↓

search()

↓

Old Timer Cancelled

↓

New Timer Starts

↓

User Stops

↓

Searching...
```

---

# Complete Debounce Function

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

This is the classic debounce implementation.

---

# Understanding the Code

```javascript
let timer;
```

Stores the timeout ID.

---

```javascript
clearTimeout(timer);
```

Cancels the previous timer.

---

```javascript
timer = setTimeout(...)
```

Starts a new timer.

---

```javascript
return function () {}
```

Returns a new function that remembers `timer`.

This works because of **closures**.

---

# Example

```javascript
function debounce(callback, delay) {

  let timer;

  return function () {

    clearTimeout(timer);

    timer = setTimeout(callback, delay);

  };

}

const print = debounce(() => {
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

Only once.

---

# Why?

Timeline

```
print()

↓

Timer Started

↓

print()

↓

Old Timer Removed

↓

New Timer Started

↓

print()

↓

Old Timer Removed

↓

New Timer Started

↓

print()

↓

Old Timer Removed

↓

New Timer Started

↓

1 Second Passes

↓

Hello
```

---

# Search Box Example

HTML

```html
<input
  type="text"
  id="search"
  placeholder="Search..."
>
```

JavaScript

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

const searchInput =
document.getElementById("search");

const search = debounce(() => {

  console.log("Searching API...");

}, 500);

searchInput.addEventListener(
  "keyup",
  search
);
```

---

# What Happens?

User types

```
J

Ja

Jav

Java

JavaScript
```

Instead of

```
5 API Calls
```

Only

```
1 API Call
```

after the user stops typing.

---

# Window Resize Example

```javascript
function debounce(callback, delay) {

  let timer;

  return function () {

    clearTimeout(timer);

    timer = setTimeout(callback, delay);

  };

}

window.addEventListener(

  "resize",

  debounce(() => {

    console.log("Window resized");

  }, 500)

);
```

Instead of hundreds of resize events,

Only one executes after resizing stops.

---

# Behind the Scenes

```
resize

↓

clearTimeout()

↓

setTimeout()

↓

resize

↓

clearTimeout()

↓

setTimeout()

↓

resize

↓

clearTimeout()

↓

setTimeout()

↓

Stop Resizing

↓

Execute Callback
```

---

# Advantages

✅ Reduces API calls

✅ Better performance

✅ Less server load

✅ Better user experience

✅ Saves bandwidth

---

# Common Mistakes

## Mistake 1

```javascript
setTimeout(callback(), 500);
```

Wrong ❌

`callback()` executes immediately.

Correct

```javascript
setTimeout(callback, 500);
```

---

## Mistake 2

Forgetting

```javascript
clearTimeout(timer);
```

Without it,

Debouncing won't work correctly because multiple timers will execute.

---

# Summary (Part 1)

You learned:

- ✅ What is Debouncing?
- ✅ Why Debouncing is needed
- ✅ Real-world examples
- ✅ Search optimization
- ✅ setTimeout()
- ✅ clearTimeout()
- ✅ Custom debounce function
- ✅ Search input example
- ✅ Window resize example
- ✅ Common mistakes

---

# Practice Questions

### Easy

1. Create a debounce function with a delay of 1000ms.
2. Attach it to an input field.
3. Print `"Searching..."` only after typing stops.

### Medium

1. Debounce a button click.
2. Debounce a window resize event.
3. Explain why `clearTimeout()` is required.
