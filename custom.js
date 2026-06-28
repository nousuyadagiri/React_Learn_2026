/* Higher Order Function */

// Functions that take other functions as arguments or return a function.

// Write less code, Avoid repetition, Improve readability, Create reusable logic
// Higher-Order Functions are not ust map(), filter(), and reduce().
// Its a fundamental javascript concept that enables cleaner. more reusable, and more maintainable code.

function greet(name) {
  return `Hello ${name}`;
}

function processUser(callBack, user) {
  return callBack(user);
}

const result = processUser(greet, "Nousu");

console.log(result);

/* What is  Debouncing ? */

// Wait until the user stops doing something, then execute the function.
// Debouncing is a JavaScript optimization technique that delays the execution of a function until a specified period has passed without the event being triggered again. It is commonly used for search inputs, window resizing, and scroll events to reduce unnecessary function calls and improve performance.

function search(value) {
  console.log("Searching:", value);
}

function debounce(callBack, delay) {
  let timer;

  return function (...args) {
    // clearTimeout Resets the timer every time the event fires
    clearTimeout(timer);

    timer = setTimeout(() => {
      callBack(...args);
    }, delay);
  };
}

const debounceSearch = debounce(search, 500);

const input = document.getElementById("search");

input.addEventListener("input", (e) => {
  debounceSearch(e.target.value);
});
