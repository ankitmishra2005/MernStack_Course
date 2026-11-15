// Task 17: JavaScript - Promise-Based Divide Function

// Arrow function that returns a Promise.
// The Promise rejects if the divisor is zero; otherwise, it resolves
// with the division result.
const divide = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject(new Error("Division by zero is not allowed."));
    } else {
      resolve(num1 / num2);
    }
  });
};

// Display a result or error for the interactive calculator.
const divideForm = document.getElementById("divideForm");
const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const liveResult = document.getElementById("liveResult");

divideForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  liveResult.className = "live-result";
  liveResult.textContent = "Calculating...";

  divide(firstNumber, secondNumber)
    .then((result) => {
      liveResult.className = "live-result success";
      liveResult.textContent = `${firstNumber} ÷ ${secondNumber} = ${result}`;
      console.log(`Success: ${firstNumber} / ${secondNumber} = ${result}`);
    })
    .catch((error) => {
      liveResult.className = "live-result error";
      liveResult.textContent = `Error: ${error.message}`;
      console.error("Division failed:", error.message);
    });
});

// Five dummy test cases as required by the assignment.
const testCases = [
  { num1: 20, num2: 4, description: "Normal division" },
  { num1: 100, num2: 5, description: "Another whole-number result" },
  { num1: 7, num2: 2, description: "Decimal result" },
  { num1: -30, num2: 3, description: "Negative number" },
  { num1: 15, num2: 0, description: "Division by zero (expected rejection)" }
];

const runTestsButton = document.getElementById("runTests");
const testResults = document.getElementById("testResults");

// Run all examples and handle each resolved or rejected Promise.
const runAllTests = async () => {
  testResults.innerHTML = "";

  for (const test of testCases) {
    const card = document.createElement("article");
    card.className = "test-card";

    const details = document.createElement("div");
    details.className = "test-details";

    const title = document.createElement("strong");
    title.textContent = `${test.num1} ÷ ${test.num2}`;

    const description = document.createElement("span");
    description.textContent = test.description;

    const status = document.createElement("span");
    status.className = "test-status";
    status.textContent = "Running...";

    details.append(title, description);
    card.append(details, status);
    testResults.append(card);

    try {
      const result = await divide(test.num1, test.num2);
      status.textContent = `Resolved: ${result}`;
      console.log(`${test.description}: ${test.num1} / ${test.num2} = ${result}`);
    } catch (error) {
      status.textContent = `Rejected: ${error.message}`;
      status.classList.add("failed");
      console.error(`${test.description}: ${error.message}`);
    }
  }
};

runTestsButton.addEventListener("click", runAllTests);

console.log("Promise-based divide() function is ready.");
console.log("Click 'Run all tests' to execute the five test cases.");
