// Compound interest formula: A = P * (1 + r/n)^(n*t)
const principal = 10000;
const rate = 0.05; // 5% written as a decimal
const compoundsPerYear = 1;
const timeInYears = 3;

const calculateCompoundInterest = () => {
  const amount = principal * Math.pow(
    1 + rate / compoundsPerYear,
    compoundsPerYear * timeInYears
  );
  const compoundInterest = amount - principal;

  console.log("Total amount after 3 years:", amount.toFixed(2));
  console.log("Compound interest:", compoundInterest.toFixed(2));

  document.getElementById("output").textContent =
    `Total amount: ₹${amount.toFixed(2)} | Compound interest: ₹${compoundInterest.toFixed(2)}`;
};

document.getElementById("calculateBtn").addEventListener("click", calculateCompoundInterest);
calculateCompoundInterest();
