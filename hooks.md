# React Hooks

## What are Hooks?

Hooks are special functions introduced in React 16.8 that allow functional components to use React features such as:

- State
- Lifecycle methods
- Context
- Refs
- Performance optimizations
- Custom reusable logic

Before Hooks, these features were only available in class components.

---

# 1. useState

## Definition

`useState` is a React Hook that allows a functional component to store and update state.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

- `state` → Current value
- `setState` → Function used to update the value
- `initialValue` → Initial state

---

### Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

---

### When to use

- Counter
- Forms
- Toggle Button
- Shopping Cart
- Login Forms

---

# 2. useEffect

## Definition

`useEffect` is a React Hook used to perform side effects inside functional components.

Examples of side effects:

- Fetching API data
- Timers
- Event Listeners
- Updating the document title
- Local Storage

---

### Syntax

```jsx
useEffect(() => {
  // Side Effect

  return () => {
    // Cleanup Function
  };
}, [dependencies]);
```

---

### Example

```jsx
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

---

### Dependency Array

Run only once

```jsx
useEffect(() => {}, []);
```

Run every render

```jsx
useEffect(() => {});
```

Run when count changes

```jsx
useEffect(() => {}, [count]);
```

---

### Cleanup Example

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

---

### When to use

- API Calls
- Timers
- Event Listeners
- Local Storage
- DOM Updates

---

# 3. useRef

## Definition

`useRef` is a React Hook that stores a mutable value that does not cause a re-render when updated.

It is mainly used for:

- Accessing DOM elements
- Storing previous values
- Storing timers

---

### Syntax

```jsx
const ref = useRef(initialValue);
```

---

### Example

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />

      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

---

### Store Previous Value

```jsx
const previousCount = useRef(0);

useEffect(() => {
  previousCount.current = count;
}, [count]);
```

---

### When to use

- Focus input
- Previous value
- Timer IDs
- DOM Manipulation

---

# 4. useMemo

## Definition

`useMemo` is a React Hook that memoizes (caches) the result of a calculation so that React does not recompute it on every render unless its dependencies change.

---

### Syntax

```jsx
const memoizedValue = useMemo(() => {
  return value;
}, [dependencies]);
```

- First argument → Function that returns a value
- Second argument → Dependency array

---

### Example

```jsx
import { useMemo } from "react";

const sortedUsers = useMemo(() => {
  return [...users].sort((a, b) => a.age - b.age);
}, [users]);
```

---

### Expensive Calculation Example

```jsx
const result = useMemo(() => {
  return slowFunction(count);
}, [count]);
```

Now `slowFunction()` runs only when `count` changes.

---

### Where to use

- Filtering Large Arrays
- Sorting
- Expensive Calculations
- Large Loops
- Memoizing Objects and Arrays

---

# 5. useCallback

## Definition

`useCallback` memoizes a function so that React doesn't recreate it on every render unless dependencies change.

---

### Syntax

```jsx
const memoizedFunction = useCallback(() => {}, [dependencies]);
```

---

### Example

```jsx
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
```

---

### When to use

- Passing functions to child components
- Prevent unnecessary re-renders
- With React.memo

---

# 6. React.memo

## Definition

`React.memo` is a Higher Order Component (HOC) that prevents unnecessary re-rendering of a component when its props haven't changed.

---

### Example

```jsx
const Child = React.memo(({ name }) => {
  console.log("Child Render");

  return <h2>{name}</h2>;
});
```

---

### When to use

- Large Components
- Expensive UI
- Performance Optimization

---

# 7. useContext

## Definition

`useContext` allows components to access data from a Context without prop drilling.

---

### Create Context

```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
```

---

### Provide Context

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

---

### Consume Context

```jsx
import { useContext } from "react";

const theme = useContext(ThemeContext);

console.log(theme);
```

---

### When to use

- Theme
- Authentication
- Language
- User Data

---

# 8. useReducer

## Definition

`useReducer` is used for managing complex state logic.

It is similar to Redux.

---

### Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

---

### Example

```jsx
const initialState = 0;

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
}

const [count, dispatch] = useReducer(reducer, initialState);
```

Dispatch

```jsx
dispatch({ type: "INCREMENT" });

dispatch({ type: "DECREMENT" });
```

---

### When to use

- Todo App
- Shopping Cart
- Authentication
- Complex Forms

---

# 9. useLayoutEffect

## Definition

`useLayoutEffect` works like `useEffect`, but it runs synchronously after DOM updates and before the browser paints the screen.

---

### Example

```jsx
useLayoutEffect(() => {
  console.log("Runs before browser paint");
}, []);
```

---

### When to use

- Measuring DOM
- Animations
- Preventing UI Flickering

---

# 10. Custom Hooks

## Definition

A Custom Hook is simply a JavaScript function whose name starts with `use` and that can call other React Hooks. It allows you to reuse stateful logic across components.

---

### Example

```jsx
import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return { count, increment };
}
```

Using it

```jsx
function App() {
  const { count, increment } = useCounter();

  return (
    <>
      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>
    </>
  );
}
```

---

### When to use

- API Calls
- Authentication
- Forms
- Reusable Logic
- Timers

---

# useMemo vs useCallback

| useMemo                         | useCallback             |
| ------------------------------- | ----------------------- |
| Memoizes a value                | Memoizes a function     |
| Returns a value                 | Returns a function      |
| Used for expensive calculations | Used for event handlers |

Example

```jsx
const total = useMemo(() => price * quantity, [price, quantity]);
```

```jsx
const handleClick = useCallback(() => {}, []);
```

---

# Hook Order Rules

✅ Always call Hooks at the top level.

```jsx
const [count, setCount] = useState(0);
```

❌ Never call Hooks inside

- if statements
- loops
- nested functions

Wrong

```jsx
if (isLoggedIn) {
  useEffect(() => {});
}
```

---

# Most Common Hooks

| Hook            | Purpose              |
| --------------- | -------------------- |
| useState        | State Management     |
| useEffect       | Side Effects         |
| useRef          | DOM & Mutable Values |
| useMemo         | Memoize Values       |
| useCallback     | Memoize Functions    |
| useContext      | Access Global State  |
| useReducer      | Complex State        |
| useLayoutEffect | DOM Before Paint     |
| Custom Hook     | Reusable Logic       |

---

# React Hooks Learning Order

1. useState
2. useEffect
3. useRef
4. useContext
5. useReducer
6. useMemo
7. useCallback
8. React.memo
9. useLayoutEffect
10. Custom Hooks

---

# Quick Revision

| Hook            | Remember This                             |
| --------------- | ----------------------------------------- |
| useState        | Stores state                              |
| useEffect       | Performs side effects                     |
| useRef          | Stores mutable values without re-render   |
| useMemo         | Caches calculated values                  |
| useCallback     | Caches functions                          |
| useContext      | Shares data globally                      |
| useReducer      | Handles complex state                     |
| useLayoutEffect | Runs before browser paint                 |
| React.memo      | Prevents unnecessary component re-renders |
| Custom Hook     | Reuses hook logic                         |
