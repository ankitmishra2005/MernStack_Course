// Arrow function that returns a Promise.
const divide = (firstNumber, secondNumber) => {
  return new Promise((resolve, reject) => {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number" ||
        !Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
      reject(new Error("Please provide valid numbers."));
    } else if (secondNumber === 0) {
      reject(new Error("Division by zero is not allowed."));
    } else {
      resolve(firstNumber / secondNumber);
    }
  });
};

const testCases = [
  [20, 5],
  [15, 3],
  [10, 0],
  [7, 2],
  [100, 4]
];

const resultsContainer = document.getElementById("results");

testCases.forEach(([a, b]) => {
  divide(a, b)
    .then((result) => {
      const message = `${a} ÷ ${b} = ${result}`;
      console.log(message);
      showResult(message, "success");
    })
    .catch((error) => {
      const message = `${a} ÷ ${b}: ${error.message}`;
      console.error(message);
      showResult(message, "error");
    });
});

function showResult(message, type) {
  const paragraph = document.createElement("p");
  paragraph.className = `result ${type}`;
  paragraph.textContent = message;
  resultsContainer.appendChild(paragraph);
}
