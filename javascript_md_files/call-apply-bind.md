# 14.3-call-apply-bind.md

# JavaScript `call()`, `apply()`, and `bind()` ⭐⭐⭐⭐⭐

`call()`, `apply()`, and `bind()` are methods available on every JavaScript function.

They allow you to **manually set the value of `this`**.

These methods are commonly used in:

- JavaScript Interviews
- Object Method Borrowing
- Event Handling
- React Class Components
- Function Reusability

---

# Why Do We Need Them?

Consider this object:

```javascript
const person = {
  name: "Nousu",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

person.greet();
```

Output

```
Hello Nousu
```

But what if we want to use the same `greet()` function for another object?

That's where `call()`, `apply()`, and `bind()` help.

---

# What is `call()`?

`call()` invokes a function immediately and lets you specify the value of `this`.

## Syntax

```javascript
functionName.call(thisArg, arg1, arg2, ...);
```

- `thisArg` → The object that should become `this`
- Remaining values → Function arguments

---

# Example 1

```javascript
function greet() {
  console.log(this.name);
}

const user = {
  name: "Nousu",
};

greet.call(user);
```

Output

```
Nousu
```

`this` now refers to `user`.

---

# Example 2

```javascript
function introduce(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

const person = {
  name: "John",
};

introduce.call(person, "Hyderabad", "India");
```

Output

```
John lives in Hyderabad, India
```

---

# Method Borrowing Using `call()`

```javascript
const person1 = {
  name: "Alice",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

const person2 = {
  name: "Bob",
};

person1.greet.call(person2);
```

Output

```
Hello Bob
```

The `greet()` method is borrowed by `person2`.

---

# What is `apply()`?

`apply()` works like `call()`.

The difference is:

It accepts **arguments as an array**.

## Syntax

```javascript
functionName.apply(thisArg, [arg1, arg2]);
```

---

# Example

```javascript
function introduce(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

const person = {
  name: "David",
};

introduce.apply(person, ["Chennai", "India"]);
```

Output

```
David lives in Chennai, India
```

---

# call() vs apply()

### call()

```javascript
sum.call(obj, 10, 20);
```

Arguments are passed individually.

---

### apply()

```javascript
sum.apply(obj, [10, 20]);
```

Arguments are passed as an array.

---

# What is `bind()`?

Unlike `call()` and `apply()`, `bind()` **does not execute the function immediately**.

Instead, it returns a **new function** with `this` permanently bound.

## Syntax

```javascript
const newFunction = oldFunction.bind(thisArg);
```

---

# Example

```javascript
function greet() {
  console.log(`Hello ${this.name}`);
}

const person = {
  name: "Nousu",
};

const sayHello = greet.bind(person);

sayHello();
```

Output

```
Hello Nousu
```

Notice:

`bind()` returns a new function.

---

# Another Example

```javascript
const person = {
  name: "John",
};

function show(age) {
  console.log(this.name, age);
}

const fn = show.bind(person);

fn(25);
```

Output

```
John 25
```

---

# Real-World Example

Suppose we lose the object context.

```javascript
const user = {
  name: "Nousu",

  greet() {
    console.log(this.name);
  },
};

const fn = user.greet;

fn();
```

Output

```
undefined
```

Fix using `bind()`.

```javascript
const fn = user.greet.bind(user);

fn();
```

Output

```
Nousu
```

---

# `setTimeout()` Example

Without `bind()`

```javascript
const person = {
  name: "Nousu",

  greet() {
    console.log(this.name);
  },
};

setTimeout(person.greet, 1000);
```

Output

```
undefined
```

---

Using `bind()`

```javascript
setTimeout(person.greet.bind(person), 1000);
```

Output

```
Nousu
```

---

# Comparison Table

| Feature              | call()     | apply() | bind()                                          |
| -------------------- | ---------- | ------- | ----------------------------------------------- |
| Executes Immediately | ✅         | ✅      | ❌                                              |
| Returns New Function | ❌         | ❌      | ✅                                              |
| Arguments            | Individual | Array   | Individual (when calling the returned function) |
| Changes `this`       | ✅         | ✅      | ✅                                              |

---

# Function Borrowing

```javascript
const employee = {
  name: "John",
};

const manager = {
  name: "David",
};

function showRole(role) {
  console.log(`${this.name} is ${role}`);
}

showRole.call(employee, "Developer");
showRole.call(manager, "Team Lead");
```

Output

```
John is Developer
David is Team Lead
```

---

# Partial Application with `bind()`

```javascript
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(5));
```

Output

```
10
```

Explanation:

`bind(null, 2)` fixes the first argument as `2`.

Calling `double(5)` becomes:

```javascript
multiply(2, 5);
```

---

# Common Mistakes

## Mistake 1

```javascript
const fn = greet.call(user);
```

This executes immediately.

---

Correct

```javascript
const fn = greet.bind(user);
```

Now `fn` can be called later.

---

## Mistake 2

```javascript
introduce.apply(person, "Hyderabad", "India");
```

Wrong because `apply()` expects an array.

Correct

```javascript
introduce.apply(person, ["Hyderabad", "India"]);
```

---

# Best Practices

✅ Use `call()` when arguments are known individually.

```javascript
fn.call(user, 1, 2);
```

---

✅ Use `apply()` when arguments already exist in an array.

```javascript
fn.apply(user, argsArray);
```

---

✅ Use `bind()` for callbacks and event handlers.

```javascript
button.onclick = person.greet.bind(person);
```

---

# Interview Questions

### 1. Difference between `call()`, `apply()`, and `bind()`?

| Method    | Description                                 |
| --------- | ------------------------------------------- |
| `call()`  | Calls immediately with individual arguments |
| `apply()` | Calls immediately with array arguments      |
| `bind()`  | Returns a new function with `this` bound    |

---

### 2. Which method returns a new function?

`bind()`

---

### 3. Which methods execute immediately?

`call()` and `apply()`

---

### 4. When should you use `bind()`?

When passing a method as a callback (e.g., `setTimeout`, event listeners) or when you need to preserve the original object context.

---

### 5. Can `bind()` also pre-fill arguments?

Yes.

This is called **partial application**.

---

# Summary

You learned:

- ✅ `call()`
- ✅ `apply()`
- ✅ `bind()`
- ✅ Function Borrowing
- ✅ Losing `this`
- ✅ Preserving `this`
- ✅ Partial Application
- ✅ Real-world Examples
- ✅ Best Practices
- ✅ Interview Questions

---

# Practice Questions

## Easy

1. Create an object with a `name` property and use `call()` to print it.
2. Rewrite the same example using `apply()`.
3. Rewrite it using `bind()`.

---

## Medium

1. Borrow a method from one object and use it with another.
2. Fix a `setTimeout()` example where `this` is lost.
3. Compare the outputs of `call()`, `apply()`, and `bind()`.

---

## Challenge

Create a `Student` object with:

- `name`
- `course`

Create a standalone function:

```javascript
function introduce(city, country) {}
```

Use:

- `call()`
- `apply()`
- `bind()`

to invoke the function with different student objects and compare the results.

---

# Final Notes

### Remember This Rule

```
call()
↓

Executes Immediately

↓

Arguments Individually

--------------------------

apply()

↓

Executes Immediately

↓

Arguments as Array

--------------------------

bind()

↓

Returns New Function

↓

Executes Later

↓

Preserves `this`
```

### Quick Interview Tip

When asked:

> **"How do you fix a method that loses `this` when passed as a callback?"**

The most common answer is:

```javascript
const fixedFn = obj.method.bind(obj);
```

Or, when appropriate, use an **arrow function** to preserve the surrounding lexical `this`.
