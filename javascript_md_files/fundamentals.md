# JavaScript Fundamentals 🚀

JavaScript is a **high-level, interpreted programming language** used to create interactive web pages and applications.

It runs in:

- 🌐 Browsers (Chrome, Firefox, Edge)
- 🖥️ Servers using Node.js
- 📱 Mobile Apps (React Native)
- 💻 Desktop Apps (Electron)

---

# Why Learn JavaScript?

JavaScript allows you to:

- Make websites interactive
- Build web applications
- Create games
- Develop mobile apps
- Build backend APIs
- Work with databases
- Build full-stack applications

---

# JavaScript Features

- Lightweight
- Dynamic Typing
- Object-Oriented
- Functional Programming
- Event Driven
- Asynchronous Programming
- Cross Platform

---

# First JavaScript Program

```javascript
console.log("Hello World!");
```

Output:

```
Hello World!
```

---

# Adding JavaScript

## Inline

```html
<button onclick="alert('Hello')">Click</button>
```

---

## Internal

```html
<script>
  console.log("Hello");
</script>
```

---

## External

```html
<script src="script.js"></script>
```

---

# Comments

Comments are ignored by JavaScript.

## Single Line

```javascript
// This is a comment

console.log("Hello");
```

---

## Multi Line

```javascript
/*
This
is
multiple
line comment
*/

console.log("Hello");
```

---

# Variables

Variables store data.

There are three ways to declare variables.

- var
- let
- const

---

# var

Old way of declaring variables.

```javascript
var name = "John";

console.log(name);
```

Output

```
John
```

### Can be redeclared

```javascript
var age = 20;
var age = 25;

console.log(age);
```

Output

```
25
```

### Can be reassigned

```javascript
var city = "Delhi";

city = "Mumbai";

console.log(city);
```

Output

```
Mumbai
```

### Function Scoped

```javascript
function demo() {
  var x = 10;
}

console.log(x); // Error
```

---

# let

Introduced in ES6.

```javascript
let name = "Nousu";

console.log(name);
```

### Cannot Redeclare

```javascript
let age = 20;

// let age = 25; ❌ Error
```

### Can Reassign

```javascript
let score = 90;

score = 95;

console.log(score);
```

Output

```
95
```

### Block Scope

```javascript
{
  let a = 10;
}

console.log(a); // Error
```

---

# const

Used for constants.

```javascript
const PI = 3.14;

console.log(PI);
```

Cannot reassign

```javascript
const PI = 3.14;

PI = 5;

// Error
```

---

Objects can still be modified.

```javascript
const user = {
  name: "John",
};

user.name = "David";

console.log(user);
```

Output

```
{
name:"David"
}
```

---

# Difference Between var, let and const

| Feature   | var      | let   | const |
| --------- | -------- | ----- | ----- |
| Redeclare | ✅       | ❌    | ❌    |
| Reassign  | ✅       | ✅    | ❌    |
| Scope     | Function | Block | Block |
| Hoisted   | Yes      | Yes   | Yes   |

---

# Data Types

JavaScript has two categories.

## Primitive

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

---

## Non Primitive

- Object
- Array
- Function

---

# String

Text data.

```javascript
let name = "Nousu";

console.log(name);
```

Output

```
Nousu
```

---

# Number

```javascript
let age = 22;

console.log(age);
```

---

# Boolean

```javascript
let isLoggedIn = true;

console.log(isLoggedIn);
```

---

# Undefined

Variable declared but not assigned.

```javascript
let value;

console.log(value);
```

Output

```
undefined
```

---

# Null

Intentional empty value.

```javascript
let user = null;

console.log(user);
```

---

# BigInt

Very large integers.

```javascript
let num = 123456789123456789123456789n;

console.log(num);
```

---

# Symbol

Unique identifier.

```javascript
let id = Symbol("id");

console.log(id);
```

---

# Object

Collection of key-value pairs.

```javascript
const person = {
  name: "Nousu",
  age: 22,
};

console.log(person);
```

---

# Array

Stores multiple values.

```javascript
const colors = ["Red", "Blue", "Green"];

console.log(colors);
```

---

# Function

```javascript
function greet() {
  console.log("Hello");
}

greet();
```

---

# typeof Operator

Returns datatype.

```javascript
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
```

Output

```
string
number
boolean
```

---

# Operators

Operators perform operations.

---

## Arithmetic Operators

| Operator | Meaning        |
| -------- | -------------- |
| +        | Addition       |
| -        | Subtraction    |
| \*       | Multiplication |
| /        | Division       |
| %        | Modulus        |
| \*\*     | Power          |

Example

```javascript
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

---

## Assignment Operators

```javascript
let x = 10;

x += 5;

console.log(x);
```

---

## Comparison Operators

```javascript
10 == "10";
```

Output

```
true
```

---

```javascript
10 === "10";
```

Output

```
false
```

Difference

== checks only value

=== checks value and datatype

---

## Logical Operators

### AND

```javascript
true && true;
```

Output

```
true
```

---

### OR

```javascript
true || false;
```

Output

```
true
```

---

### NOT

```javascript
!true;
```

Output

```
false
```

---

## Increment

```javascript
let x = 5;

x++;

console.log(x);
```

Output

```
6
```

---

## Decrement

```javascript
let x = 5;

x--;

console.log(x);
```

Output

```
4
```

---

# Type Conversion

JavaScript converts values from one datatype to another.

---

# Implicit Conversion

JavaScript automatically converts.

```javascript
console.log("5" + 2);
```

Output

```
52
```

---

```javascript
console.log("5" - 2);
```

Output

```
3
```

---

# Explicit Conversion

Done manually.

---

## Number()

```javascript
let value = "100";

console.log(Number(value));
```

Output

```
100
```

---

## String()

```javascript
let age = 25;

console.log(String(age));
```

Output

```
"25"
```

---

## Boolean()

```javascript
console.log(Boolean(1));
```

Output

```
true
```

---

```javascript
console.log(Boolean(0));
```

Output

```
false
```

---

# Truthy and Falsy Values

Falsy values behave like false.

There are only **8 falsy values**.

```javascript
false;
0 - 0;
0n;
("");
null;
undefined;
NaN;
```

Everything else is Truthy.

Examples

```javascript
Boolean(1);
```

Output

```
true
```

---

```javascript
Boolean("Hello");
```

Output

```
true
```

---

```javascript
Boolean([]);
```

Output

```
true
```

---

```javascript
Boolean({});
```

Output

```
true
```

---

```javascript
Boolean("");
```

Output

```
false
```

---

Example

```javascript
let username = "";

if (username) {
  console.log("Logged In");
} else {
  console.log("Login Required");
}
```

Output

```
Login Required
```

---

# Template Literals

Introduced in ES6.

Uses backticks.

```
``
```

Instead of quotes.

---

Without Template Literal

```javascript
let name = "Nousu";

console.log("Hello " + name);
```

---

With Template Literal

```javascript
let name = "Nousu";

console.log(`Hello ${name}`);
```

Output

```
Hello Nousu
```

---

Multiple Lines

```javascript
let text = `Hello

Welcome

JavaScript`;
```

---

Expressions

```javascript
let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);
```

Output

```
Sum = 30
```

---

# Summary

You learned:

- ✅ JavaScript Introduction
- ✅ Features
- ✅ Variables
- ✅ var
- ✅ let
- ✅ const
- ✅ Data Types
- ✅ Primitive Types
- ✅ Non Primitive Types
- ✅ typeof
- ✅ Operators
- ✅ Arithmetic Operators
- ✅ Assignment Operators
- ✅ Comparison Operators
- ✅ Logical Operators
- ✅ Increment & Decrement
- ✅ Type Conversion
- ✅ Truthy & Falsy Values
- ✅ Template Literals
- ✅ Comments

---

# Practice Questions

### Easy

1. Create variables using var, let and const.

2. Print your name using console.log().

3. Find datatype of:
   - 100
   - "JavaScript"
   - true

4. Add two numbers.

5. Compare:
   - 10 == "10"
   - 10 === "10"

---

### Medium

1. Convert string `"500"` into number.

2. Convert number `250` into string.

3. Check truthy/falsy of:
   - []
   - {}
   - ""
   - 0
   - "Hello"

4. Print:

```
My name is Nousu and I am 22 years old.
```

using Template Literals.

---

### Challenge

Write a program that:

- Takes name
- Takes age
- Takes city

Print:

```
Hello Nousu!

You are 22 years old.

You live in Hyderabad.
```

using Template Literals.
