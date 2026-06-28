# JavaScript Control Flow 🚦

Control Flow determines **which code should execute and when** based on certain conditions.

It helps JavaScript make decisions.

Topics Covered:

- if
- else
- else if
- switch
- Ternary Operator
- Nullish Coalescing (??)
- Optional Chaining (?.)

---

# What is Control Flow?

By default, JavaScript executes code **line by line**.

Example:

```javascript
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
```

Output

```
Step 1
Step 2
Step 3
```

Sometimes we want to execute code only if a condition is true.

Example:

- If age is greater than 18 → Allow voting.
- If marks are above 90 → Grade A.
- If password is correct → Login.

That's where **Control Flow** comes in.

---

# if Statement

The `if` statement executes a block of code **only when the condition is true**.

### Syntax

```javascript
if (condition) {
  // Code to execute
}
```

### Example 1

```javascript
let age = 20;

if (age >= 18) {
  console.log("You can vote.");
}
```

Output

```
You can vote.
```

---

### Example 2

```javascript
let age = 15;

if (age >= 18) {
  console.log("Eligible");
}
```

Output

```
Nothing is printed because the condition is false.
```

---

### Example 3

```javascript
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
}
```

Output

```
Welcome back!
```

---

# else Statement

The `else` block runs **when the if condition is false**.

### Syntax

```javascript
if (condition) {
} else {
}
```

### Example

```javascript
let age = 15;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}
```

Output

```
Not eligible
```

---

### Another Example

```javascript
let password = "12345";

if (password === "admin") {
  console.log("Login Success");
} else {
  console.log("Wrong Password");
}
```

Output

```
Wrong Password
```

---

# else if Statement

Used when checking **multiple conditions**.

### Syntax

```javascript
if (condition1) {
} else if (condition2) {
} else {
}
```

---

### Example

```javascript
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

Output

```
Grade B
```

---

### Example 2

```javascript
let time = 14;

if (time < 12) {
  console.log("Good Morning");
} else if (time < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
```

Output

```
Good Afternoon
```

---

# Nested if

You can place an `if` inside another `if`.

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive.");
  }
}
```

Output

```
You can drive.
```

---

# switch Statement

The `switch` statement is used when comparing **one value against many possible values**.

### Syntax

```javascript
switch (expression) {
  case value1:
    // code
    break;

  case value2:
    // code
    break;

  default:
  // code
}
```

---

### Example

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid Day");
}
```

Output

```
Wednesday
```

---

### Example 2

```javascript
let fruit = "Apple";

switch (fruit) {
  case "Apple":
    console.log("Red Fruit");
    break;

  case "Banana":
    console.log("Yellow Fruit");
    break;

  default:
    console.log("Unknown Fruit");
}
```

Output

```
Red Fruit
```

---

# Why break is Important?

Without `break`, JavaScript continues executing the next cases.

Example

```javascript
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");

  case 2:
    console.log("Tuesday");

  case 3:
    console.log("Wednesday");
}
```

Output

```
Monday
Tuesday
Wednesday
```

This is called **Fall Through**.

---

Correct Version

```javascript
switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;
}
```

---

# if vs switch

| if                  | switch                        |
| ------------------- | ----------------------------- |
| Multiple conditions | One variable with many values |
| Supports ranges     | Checks exact matches          |
| Flexible            | Cleaner for many fixed values |

Example:

Use `if`

```javascript
if(age >= 18)
```

Use `switch`

```javascript
switch(day)
```

---

# Ternary Operator

A shorter way of writing an `if...else`.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

---

### if...else Version

```javascript
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

### Ternary Version

```javascript
let age = 20;

console.log(age >= 18 ? "Adult" : "Minor");
```

Output

```
Adult
```

---

### Store in Variable

```javascript
let marks = 80;

let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);
```

Output

```
Pass
```

---

### Nested Ternary

```javascript
let marks = 95;

let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 50 ? "C" : "Fail";

console.log(grade);
```

Output

```
A
```

Avoid using deeply nested ternary operators because they reduce readability.

---

# Nullish Coalescing Operator (??)

Introduced in ES2020.

Returns the **right value only when the left value is `null` or `undefined`.**

### Syntax

```javascript
value ?? defaultValue;
```

---

### Example

```javascript
let username = null;

console.log(username ?? "Guest");
```

Output

```
Guest
```

---

### Example

```javascript
let username = undefined;

console.log(username ?? "Guest");
```

Output

```
Guest
```

---

### Example

```javascript
let username = "Nousu";

console.log(username ?? "Guest");
```

Output

```
Nousu
```

---

### Difference Between `||` and `??`

#### Using ||

```javascript
let count = 0;

console.log(count || 100);
```

Output

```
100
```

Why?

Because `0` is a **Falsy** value.

---

#### Using ??

```javascript
let count = 0;

console.log(count ?? 100);
```

Output

```
0
```

`??` only checks for:

- null
- undefined

It **does not** replace:

- 0
- false
- ""
- NaN

---

### More Examples

```javascript
console.log(false ?? "Default");
```

Output

```
false
```

---

```javascript
console.log("" ?? "Hello");
```

Output

```
""
```

---

```javascript
console.log(null ?? "Hello");
```

Output

```
Hello
```

---

```javascript
console.log(undefined ?? "Hello");
```

Output

```
Hello
```

---

# Optional Chaining (?.)

Introduced in ES2020.

Used to safely access nested object properties without causing errors.

---

Without Optional Chaining

```javascript
const user = {};

console.log(user.address.city);
```

Output

```
TypeError
```

Because `address` doesn't exist.

---

With Optional Chaining

```javascript
const user = {};

console.log(user.address?.city);
```

Output

```
undefined
```

No error occurs.

---

### Example

```javascript
const person = {
  name: "Nousu",
  address: {
    city: "Hyderabad",
  },
};

console.log(person.address?.city);
```

Output

```
Hyderabad
```

---

### Missing Property

```javascript
const person = {
  name: "Nousu",
};

console.log(person.address?.city);
```

Output

```
undefined
```

---

### Optional Chaining with Arrays

```javascript
const users = [
  {
    name: "John",
  },
];

console.log(users[0]?.name);
```

Output

```
John
```

---

```javascript
console.log(users[1]?.name);
```

Output

```
undefined
```

---

### Optional Chaining with Functions

```javascript
const user = {
  greet() {
    return "Hello";
  },
};

console.log(user.greet?.());
```

Output

```
Hello
```

---

If the function doesn't exist

```javascript
const user = {};

console.log(user.greet?.());
```

Output

```
undefined
```

No error occurs.

---

# Combining Optional Chaining and Nullish Coalescing

```javascript
const user = {};

const city = user.address?.city ?? "Unknown City";

console.log(city);
```

Output

```
Unknown City
```

This is a very common pattern in React and modern JavaScript.

---

# Real-World Example

```javascript
const apiResponse = {
  user: {
    profile: {
      name: "Nousu",
    },
  },
};

console.log(apiResponse.user?.profile?.name ?? "Guest");
console.log(apiResponse.user?.profile?.age ?? 18);
```

Output

```
Nousu
18
```

---

# Summary

You learned:

- ✅ Control Flow
- ✅ if Statement
- ✅ else Statement
- ✅ else if Statement
- ✅ Nested if
- ✅ switch Statement
- ✅ break Keyword
- ✅ Fall Through
- ✅ if vs switch
- ✅ Ternary Operator
- ✅ Nullish Coalescing (`??`)
- ✅ Optional Chaining (`?.`)
- ✅ Combining `?.` and `??`

---

# Practice Questions

## Easy

1. Check whether a number is positive or negative using `if`.
2. Print "Adult" or "Minor" using `else`.
3. Find the grade using `else if`.
4. Print the day name using `switch`.
5. Rewrite an `if...else` using the ternary operator.

---

## Medium

1. Create a login system using `if`.
2. Use `switch` to print the month name.
3. Use `??` to display a default username.
4. Safely access `user.address.city` using `?.`.
5. Combine `?.` and `??` to display a default city.

---

## Challenge

Create a Student Result System:

- Marks >= 90 → Grade A
- Marks >= 75 → Grade B
- Marks >= 50 → Grade C
- Otherwise → Fail

Then:

- Use the **ternary operator** to display "Pass" or "Fail".
- Use **optional chaining (`?.`)** to safely access `student.address?.city`.
- Use **nullish coalescing (`??`)** to show `"Unknown City"` if the city is missing.
