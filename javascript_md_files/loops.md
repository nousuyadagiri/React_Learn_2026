# JavaScript Loops 🔁

Loops are used to **execute a block of code repeatedly** until a specified condition is met.

Instead of writing the same code multiple times, loops help automate repetitive tasks.

---

# Why Do We Need Loops?

Imagine printing numbers from 1 to 5.

Without a loop:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

This works, but it's repetitive.

Using a loop:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Output

```
1
2
3
4
5
```

This is cleaner, shorter, and more efficient.

---

# Types of Loops

JavaScript provides five main loops:

1. for
2. while
3. do...while
4. for...of
5. for...in

---

# 1. for Loop

The **for loop** is used when you know **how many times** you want to repeat a block of code.

## Syntax

```javascript
for (initialization; condition; increment/decrement) {

    // Code

}
```

### Three Parts of a for Loop

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

- **Initialization** → `let i = 1`
- **Condition** → `i <= 5`
- **Increment** → `i++`

Flow:

```
Initialize
      ↓
Check Condition
      ↓
Run Code
      ↓
Increment
      ↓
Repeat
```

---

## Example 1

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output

```
1
2
3
4
5
```

---

## Example 2

Print 1 to 10

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

---

## Example 3

Print even numbers

```javascript
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

Output

```
2
4
6
8
10
```

---

## Example 4

Print odd numbers

```javascript
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}
```

Output

```
1
3
5
7
9
```

---

## Example 5

Reverse counting

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

Output

```
10
9
8
7
6
5
4
3
2
1
```

---

## Example 6

Table of 5

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
```

Output

```
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

---

# Infinite Loop

```javascript
for (;;) {
    console.log("Hello");
}
```

⚠ Never run this unless you intentionally want an infinite loop.

---

# 2. while Loop

The **while loop** runs **as long as the condition is true**.

## Syntax

```javascript
while (condition) {

    // Code

}
```

Flow

```
Check Condition
      ↓
Run Code
      ↓
Repeat
```

---

## Example 1

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Output

```
1
2
3
4
5
```

---

## Example 2

Print even numbers

```javascript
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}
```

Output

```
2
4
6
8
10
```

---

## Example 3

Countdown

```javascript
let i = 5;

while (i >= 1) {
    console.log(i);
    i--;
}
```

Output

```
5
4
3
2
1
```

---

# Infinite while Loop

```javascript
while (true) {
    console.log("Running...");
}
```

⚠ This loop never ends unless you use `break`.

---

# 3. do...while Loop

A **do...while loop executes at least once**, even if the condition is false.

## Syntax

```javascript
do {

    // Code

} while (condition);
```

Flow

```
Run Code
    ↓
Check Condition
    ↓
Repeat
```

---

## Example 1

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

Output

```
1
2
3
4
5
```

---

## Example 2

Condition is false initially

```javascript
let i = 10;

do {
    console.log(i);
} while (i < 5);
```

Output

```
10
```

Notice:

The code executed **once**, even though the condition was false.

---

# Difference

## while

Checks first

```
Condition
    ↓
Code
```

---

## do...while

Runs first

```
Code
 ↓
Condition
```

---

# 4. for...of Loop

The **for...of loop** is used to iterate over **iterable objects** like:

- Arrays
- Strings
- Maps
- Sets

It gives you the **values** directly.

## Syntax

```javascript
for (const value of iterable) {

}
```

---

## Example 1

Array

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

Output

```
Apple
Banana
Mango
```

---

## Example 2

Numbers

```javascript
const numbers = [10, 20, 30];

for (const number of numbers) {
    console.log(number);
}
```

Output

```
10
20
30
```

---

## Example 3

String

```javascript
const name = "Nousu";

for (const letter of name) {
    console.log(letter);
}
```

Output

```
N
o
u
s
u
```

---

## Example 4

Sum of array

```javascript
const nums = [5, 10, 15];

let sum = 0;

for (const num of nums) {
    sum += num;
}

console.log(sum);
```

Output

```
30
```

---

# 5. for...in Loop

The **for...in loop** is used to iterate over **object keys (property names)**.

## Syntax

```javascript
for (const key in object) {

}
```

---

## Example 1

```javascript
const person = {
    name: "Nousu",
    age: 22,
    city: "Hyderabad"
};

for (const key in person) {
    console.log(key);
}
```

Output

```
name
age
city
```

---

## Example 2

Access Keys and Values

```javascript
const person = {
    name: "Nousu",
    age: 22,
    city: "Hyderabad"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

Output

```
name: Nousu
age: 22
city: Hyderabad
```

---

## Example 3

Array with for...in

```javascript
const colors = ["Red", "Blue", "Green"];

for (const index in colors) {
    console.log(index);
}
```

Output

```
0
1
2
```

Notice:

`for...in` returns the **indexes**, not the values.

---

# for...of vs for...in

## for...of

Returns **values**.

```javascript
const arr = [10, 20, 30];

for (const value of arr) {
    console.log(value);
}
```

Output

```
10
20
30
```

---

## for...in

Returns **indexes (arrays)** or **keys (objects)**.

```javascript
const arr = [10, 20, 30];

for (const index in arr) {
    console.log(index);
}
```

Output

```
0
1
2
```

---

# Comparison Table

| Loop | Used For | Returns |
|------|----------|----------|
| for | Fixed number of iterations | Custom |
| while | Unknown number of iterations | Custom |
| do...while | Runs at least once | Custom |
| for...of | Arrays, Strings, Maps, Sets | Values |
| for...in | Objects | Keys/Indexes |

---

# When Should You Use Which Loop?

✅ **for**
- You know how many times to repeat.

```javascript
for (let i = 0; i < 10; i++) {}
```

---

✅ **while**
- Repeat until a condition changes.

```javascript
while (gameRunning) {}
```

---

✅ **do...while**
- Run at least once.

```javascript
do {

} while(condition);
```

---

✅ **for...of**
- Iterate through array values.

```javascript
for (const user of users) {}
```

---

✅ **for...in**
- Iterate through object properties.

```javascript
for (const key in user) {}
```

---

# Summary

You learned:

- ✅ for Loop
- ✅ while Loop
- ✅ do...while Loop
- ✅ Infinite Loops
- ✅ for...of Loop
- ✅ for...in Loop
- ✅ Loop Comparison
- ✅ Best Use Cases

---

# Practice Questions

## Easy

1. Print numbers from 1 to 20 using a `for` loop.
2. Print even numbers between 1 and 50.
3. Print numbers from 10 to 1 using a `while` loop.
4. Print your name letter by letter using `for...of`.
5. Print all keys of an object using `for...in`.

---

## Medium

1. Find the sum of numbers from 1 to 100 using a `for` loop.
2. Reverse an array using a loop.
3. Print the multiplication table of any number.
4. Count vowels in a string using `for...of`.
5. Print both keys and values of an object using `for...in`.

---

# Interview Questions

### Q1. What is the difference between `for` and `while`?

- `for` is used when the number of iterations is known.
- `while` is used when the number of iterations is unknown.

---

### Q2. What is the difference between `while` and `do...while`?

- `while` checks the condition before executing the code.
- `do...while` executes the code once before checking the condition.

---

### Q3. What is the difference between `for...of` and `for...in`?

| for...of | for...in |
|-----------|-----------|
| Returns values | Returns keys/indexes |
| Used with arrays, strings, maps, sets | Used with objects |
| Cannot directly iterate plain object values | Best for object properties |

---

### Q4. Can `for...of` iterate over objects?

No. Plain objects are not iterable.

```javascript
const obj = { name: "Nousu" };

// ❌ Error
for (const value of obj) {}
```

Use `for...in` or `Object.keys()`, `Object.values()`, or `Object.entries()` instead.

---

### Q5. Which loop is most commonly used in JavaScript?

- `for` → General-purpose loops.
- `for...of` → Arrays and strings (modern JavaScript).
- `for...in` → Objects.
- `while` → Condition-based loops.