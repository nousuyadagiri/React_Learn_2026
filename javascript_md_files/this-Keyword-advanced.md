# 14.2-this-keyword-advanced.md

We'll cover:

- ✅ Arrow Functions and `this`
- ✅ Constructor Functions
- ✅ Classes
- ✅ Event Listeners
- ✅ `setTimeout`
- ✅ Losing `this`
- ✅ React Examples
- ✅ Real Interview Questions

# JavaScript `this` Keyword (Advanced) ⭐⭐⭐⭐⭐

In Part 1, you learned:

- Global `this`
- Function `this`
- Object Method `this`

Now let's learn the advanced topics that are frequently asked in interviews.

---

# Arrow Functions and `this`

One of the biggest differences between a **regular function** and an **arrow function** is how they handle `this`.

## Regular Function

```javascript
const person = {
  name: "Nousu",

  greet: function () {
    console.log(this.name);
  },
};

person.greet();
```

Output

```
Nousu
```

Here, `this` refers to the `person` object.

---

## Arrow Function Inside an Object

```javascript
const person = {
  name: "Nousu",

  greet: () => {
    console.log(this.name);
  },
};

person.greet();
```

Output (Browser)

```
undefined
```

### Why?

Arrow functions **do not have their own `this`**.

Instead, they inherit `this` from the surrounding (lexical) scope.

Since the surrounding scope is the global scope, `this` is the global object (or `undefined` in modules/strict contexts), which doesn't have a `name` property.

---

# Arrow Functions Inherit `this`

```javascript
const person = {
  name: "Nousu",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

person.greet();
```

Output

```
Nousu
```

### Why does this work?

`inner` is an arrow function.

It inherits `this` from `greet()`.

Inside `greet()`, `this` is `person`.

---

# Regular Function Inside an Object

```javascript
const person = {
  name: "Nousu",

  greet() {
    function inner() {
      console.log(this.name);
    }

    inner();
  },
};

person.greet();
```

Output

```
undefined
```

`inner()` is called as a regular function.

So it gets its own `this`, which is **not** the `person` object.

---

# Comparison

| Regular Function         | Arrow Function               |
| ------------------------ | ---------------------------- |
| Has its own `this`       | Does not have its own `this` |
| `this` depends on caller | `this` is inherited          |
| Good for object methods  | Good for callbacks           |

---

# Constructor Functions

Constructor functions create multiple objects.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("John", 25);
const user2 = new Person("David", 30);

console.log(user1.name);
console.log(user2.name);
```

Output

```
John
David
```

---

# What Does `new` Do?

```javascript
const user = new Person("John", 25);
```

`new`:

1. Creates a new object.
2. Sets `this` to that object.
3. Executes the constructor.
4. Returns the object.

---

# Classes

Classes use the same concept.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const p1 = new Person("Nousu");

p1.greet();
```

Output

```
Hello Nousu
```

---

# `this` in Event Handlers

HTML

```html
<button id="btn">Click</button>
```

JavaScript

```javascript
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  console.log(this);
});
```

Output

```
<button>...</button>
```

`this` refers to the element that received the event.

---

# Arrow Function in Event Handler

```javascript
button.addEventListener("click", () => {
  console.log(this);
});
```

Output

```
Window (browser) or inherited outer `this`
```

Arrow functions inherit `this`, so they **do not** refer to the clicked element.

---

# `this` with `setTimeout()`

## Regular Function

```javascript
const person = {
  name: "Nousu",

  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

person.greet();
```

Output

```
undefined
```

The callback is a regular function, so it gets its own `this`.

---

## Using an Arrow Function

```javascript
const person = {
  name: "Nousu",

  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

person.greet();
```

Output

```
Nousu
```

The arrow function inherits `this` from `greet()`.

---

# Losing `this`

```javascript
const person = {
  name: "Nousu",

  greet() {
    console.log(this.name);
  },
};

const fn = person.greet;

fn();
```

Output

```
undefined
```

The method loses its object context because it is called without an object.

---

# Fixing Lost `this`

```javascript
const person = {
  name: "Nousu",

  greet() {
    console.log(this.name);
  },
};

const fn = person.greet.bind(person);

fn();
```

Output

```
Nousu
```

We'll learn `bind()` in the next chapter.

---

# React Example

```javascript
function App() {
  const user = {
    name: "Nousu",
  };

  const handleClick = () => {
    console.log(user.name);
  };

  return <button onClick={handleClick}>Click</button>;
}
```

React uses arrow functions frequently because they inherit the surrounding lexical scope instead of creating a new `this`.

---

# Common Mistakes

## Mistake 1

```javascript
const user = {
  name: "John",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

Output

```
undefined
```

Avoid using arrow functions as object methods if you need `this`.

---

## Mistake 2

```javascript
setTimeout(function () {
  console.log(this);
}, 1000);
```

`this` is not the surrounding object.

Use an arrow function if you want to preserve the surrounding `this`.

---

# Best Practices

✅ Use regular methods for object methods.

```javascript
const user = {
  greet() {},
};
```

---

✅ Use arrow functions for callbacks.

```javascript
numbers.map((num) => num * 2);
```

---

✅ Use arrow functions inside methods when you want to inherit the surrounding `this`.

---

❌ Don't use arrow functions as constructors.

```javascript
const Person = (name) => {
  this.name = name;
};

new Person("John"); // ❌ TypeError
```

Arrow functions cannot be used with `new`.

---

# Interview Questions

### 1. Do arrow functions have their own `this`?

No.

They inherit `this` from the surrounding lexical scope.

---

### 2. Why does an arrow function fail as an object method?

Because it doesn't create its own `this`.

---

### 3. Why is an arrow function useful inside `setTimeout()`?

It inherits `this` from the enclosing method, avoiding the loss of object context.

---

### 4. What happens when you use `new` with a constructor?

- Creates a new object.
- Sets `this` to the new object.
- Runs the constructor.
- Returns the new object.

---

### 5. Can arrow functions be constructors?

No.

They cannot be called with `new`.

---

# Summary

You learned:

- ✅ Arrow Functions and `this`
- ✅ Lexical `this`
- ✅ Constructor Functions
- ✅ `new` Keyword
- ✅ Classes
- ✅ Event Handlers
- ✅ `setTimeout()`
- ✅ Losing `this`
- ✅ Fixing `this`
- ✅ React Examples
- ✅ Best Practices
- ✅ Interview Questions

---

# Practice Questions

## Easy

1. Create an object with a regular method that prints `this.name`.
2. Replace the method with an arrow function and observe the output.
3. Explain why the output changes.

---

## Medium

1. Create a constructor function called `Car`.
2. Create two objects using `new`.
3. Use `setTimeout()` inside an object method with both a regular function and an arrow function. Explain the difference.

---

## Challenge

Build a `BankAccount` class:

- `constructor(owner, balance)`
- `deposit(amount)`
- `withdraw(amount)`
- `showBalance()`

Use `this` correctly in every method.

Then add a `setTimeout()` inside `showBalance()` and preserve `this` using an arrow function.
