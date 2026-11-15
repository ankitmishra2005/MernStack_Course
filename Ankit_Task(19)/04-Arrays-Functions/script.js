const numbers = [4, 8, 2, 11, 6, 7, 10];

// Arrow function to find the maximum value.
const findMaximum = (arr) => Math.max(...arr);

// Anonymous function expression to calculate the sum.
const calculateSum = function (arr) {
  let total = 0;
  arr.forEach((number) => total += number);
  return total;
};

// Function to count odd numbers.
function countOddNumbers(arr) {
  let count = 0;
  for (const number of arr) {
    if (number % 2 !== 0) count++;
  }
  return count;
}

const results = [
  `Maximum number: ${findMaximum(numbers)}`,
  `Sum of all elements: ${calculateSum(numbers)}`,
  `Count of odd numbers: ${countOddNumbers(numbers)}`
];

document.getElementById("array").textContent = `Example array: [${numbers.join(", ")}]`;
results.forEach((result) => {
  console.log(result);
  const item = document.createElement("p");
  item.className = "result";
  item.textContent = result;
  document.getElementById("results").appendChild(item);
});
