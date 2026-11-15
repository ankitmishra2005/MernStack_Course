# Task 17 - JavaScript Promise-Based Divide Function

## Objective
Create a JavaScript function that performs division using Promises, resolves with the result, and rejects with an appropriate error when the divisor is zero.

## Files included
- `index.html` - Page structure and calculator interface
- `style.css` - Responsive styling
- `script.js` - Promise-based division function and five test cases
- `Readme.md` - Project documentation

## Function
The arrow function `divide(num1, num2)` returns a Promise:
- If `num2` is zero, the Promise is rejected with `Division by zero is not allowed.`
- Otherwise, the Promise is resolved with `num1 / num2`.

## Test cases
1. `20 / 4` - resolves to `5`
2. `100 / 5` - resolves to `20`
3. `7 / 2` - resolves to `3.5`
4. `-30 / 3` - resolves to `-10`
5. `15 / 0` - rejects with an error message

## How to run
1. Extract the ZIP folder.
2. Open `index.html` in a browser.
3. Enter two numbers and click **Calculate division**.
4. Click **Run all tests** to run all five predefined examples.
5. Open browser Developer Tools (`F12`) and select Console to see success and error messages.

## Concepts used
- Arrow functions
- JavaScript Promises
- `resolve()` and `reject()`
- `.then()` and `.catch()`
- `async` / `await`
- Error handling

No Bootstrap or external JavaScript libraries are used.
