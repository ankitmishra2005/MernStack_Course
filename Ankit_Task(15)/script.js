// Task 15: JavaScript - Arrays and Functions

// Sample array given in the assignment
const sampleArray = [4, 8, 2, 11, 6, 7, 10];

// A second dummy array for testing the functions
const dummyArray = [15, 22, 9, 4, 31, 18];

// 1. Arrow function: find the maximum number in an array
const findMaximum = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let maximum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }

  return maximum;
};

// 2. Anonymous function: calculate the sum of all array elements
const calculateSum = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

// 3. Function expression: count the odd numbers in an array
const countOddNumbers = function (arr) {
  let oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount;
};

// Display results for the sample array
console.log("Sample Array:", sampleArray);
console.log("Maximum number:", findMaximum(sampleArray));
console.log("Sum of all elements:", calculateSum(sampleArray));
console.log("Count of odd numbers:", countOddNumbers(sampleArray));

// Test the same functions using the dummy array
console.log("\nDummy Array:", dummyArray);
console.log("Maximum number:", findMaximum(dummyArray));
console.log("Sum of all elements:", calculateSum(dummyArray));
console.log("Count of odd numbers:", countOddNumbers(dummyArray));
