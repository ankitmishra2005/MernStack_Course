// Different variables are used to test multiple numbers.
const numberOne = 5;
const numberTwo = 10;
const numberThree = 0;
const numberFour = 17;

const checkEvenOrOdd = (number) => {
  if (number % 2 === 0) {
    return `The number ${number} is even.`;
  } else {
    return `The number ${number} is odd.`;
  }
};

const testNumbers = [numberOne, numberTwo, numberThree, numberFour];
const resultsContainer = document.getElementById("results");

testNumbers.forEach((number) => {
  const message = checkEvenOrOdd(number);
  console.log(message);
  const paragraph = document.createElement("p");
  paragraph.className = "result";
  paragraph.textContent = message;
  resultsContainer.appendChild(paragraph);
});
