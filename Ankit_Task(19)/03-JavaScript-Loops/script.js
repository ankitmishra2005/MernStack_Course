const n = 153;
const tableNumber = 7;
const sumLimit = 10;

// Sum of the first n natural numbers using a loop.
let sumOfFirstN = 0;
for (let i = 1; i <= sumLimit; i++) {
  sumOfFirstN += i;
}

// Multiplication table.
let multiplicationTable = "";
for (let i = 1; i <= 10; i++) {
  multiplicationTable += `${tableNumber} x ${i} = ${tableNumber * i}\n`;
}

// Prime number check.
let isPrime = n > 1;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

// Find all factors.
const factors = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) factors.push(i);
}

// Sum of digits.
let remainingNumber = n;
let digitSum = 0;
while (remainingNumber > 0) {
  digitSum += remainingNumber % 10;
  remainingNumber = Math.floor(remainingNumber / 10);
}

// Armstrong number check: each digit is raised to the number of digits.
const digits = String(n).split("");
const power = digits.length;
const armstrongSum = digits.reduce((total, digit) => total + Math.pow(Number(digit), power), 0);
const isArmstrong = armstrongSum === n;

const outputLines = [
  `Sample number: ${n}`,
  `Sum of first ${sumLimit} natural numbers: ${sumOfFirstN}`,
  `Multiplication table of ${tableNumber}:\n${multiplicationTable}`,
  `Is ${n} a prime number? ${isPrime ? "Yes" : "No"}`,
  `Factors of ${n}: ${factors.join(", ")}`,
  `Sum of digits of ${n}: ${digitSum}`,
  `Is ${n} an Armstrong number? ${isArmstrong ? "Yes" : "No"}`
];

outputLines.forEach((line) => console.log(line));
document.getElementById("output").innerHTML = outputLines
  .map((line) => `<pre class="result">${line}</pre>`)
  .join("");
