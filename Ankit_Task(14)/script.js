// Task 14: JavaScript Loops - Number Operations

// Five different predefined number variables
const numberOne = 153;
const numberTwo = 17;
const numberThree = 139;
const numberFour = 10;
const numberFive = 370;

// Store all five values in an array so the same operations
// can be performed on each number.
const numbers = [numberOne, numberTwo, numberThree, numberFour, numberFive];

// Function to perform all required operations on a number
function performOperations(number) {
  console.log("\n----------------------------------------");
  console.log("Operations for number: " + number);
  console.log("----------------------------------------");

  // 1. Find the sum of the first n natural numbers
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log("Sum of first " + number + " numbers: " + sum);

  // 2. Print the multiplication table of the number
  console.log("Multiplication table of " + number + ":");
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
  }

  // 3. Check whether the number is prime
  let isPrime = number > 1;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log("Is it a prime number? " + (isPrime ? "Yes" : "No"));

  // 4. Find all factors of the number
  let factors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  console.log("Factors: " + factors.join(", "));

  // 5. Find the sum of all digits
  let tempNumber = number;
  let digitSum = 0;
  while (tempNumber > 0) {
    let digit = tempNumber % 10;
    digitSum += digit;
    tempNumber = Math.floor(tempNumber / 10);
  }
  console.log("Sum of its digits: " + digitSum);

  // 6. Check Armstrong number using the cube of each digit,
  // as specified in the assignment (for example, 153).
  tempNumber = number;
  let armstrongSum = 0;
  while (tempNumber > 0) {
    let digit = tempNumber % 10;
    armstrongSum += digit ** 3;
    tempNumber = Math.floor(tempNumber / 10);
  }
  const isArmstrong = armstrongSum === number;
  console.log("Sum of cubes of its digits: " + armstrongSum);
  console.log("Is it an Armstrong number? " + (isArmstrong ? "Yes" : "No"));
}

// Run the operations for all five predefined numbers
for (let i = 0; i < numbers.length; i++) {
  performOperations(numbers[i]);
}
