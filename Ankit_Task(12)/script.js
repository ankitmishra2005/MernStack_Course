// Compound Interest Calculation using predefined values

// Principal amount (P)
const principal = 50000;

// Annual rate of interest (r), expressed as a decimal
const rate = 5 / 100;

// Number of times interest is compounded per year (n)
const compoundsPerYear = 1;

// Time period in years (t)
const timeInYears = 3;

// A = P(1 + r/n)^(nt)
const amount = principal * Math.pow(
  1 + rate / compoundsPerYear,
  compoundsPerYear * timeInYears
);

// Compound Interest = Amount - Principal
const compoundInterest = amount - principal;

// Display the results in the browser console
console.log("Principal Amount: ₹" + principal.toFixed(2));
console.log("Total Amount after " + timeInYears + " years: ₹" + amount.toFixed(2));
console.log("Compound Interest after " + timeInYears + " years: ₹" + compoundInterest.toFixed(2));
