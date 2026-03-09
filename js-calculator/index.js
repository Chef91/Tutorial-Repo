// calculate SUM = Addition
function calculateSum(num1, num2) {
  return num1 + num2;
};

console.log("Add 2 + 5 = " + calculateSum(2, 5));
console.log("Add 10 + 10 = " + calculateSum(10, 10));
console.log("Add 5 + 5 = " + calculateSum(5, 5));

//Calculate Difference = Subtraction
function calculateDifference(num1, num2) {
  return num1 - num2;
};

console.log("Subtract 22 - 5 = " + calculateDifference(22, 5));
console.log("Subtract 12 - 1 = " + calculateDifference(12, 1));
console.log("Subtract 17 - 9 = " + calculateDifference(17, 9));

// Calculate Product = Multiply
function calculateProduct(num1, num2) {
  return num1 * num2;
};

console.log("Multiply 13 * 5 = " + calculateProduct(13, 5));
console.log("Multiply 4 * 6 = " + calculateProduct(4, 6));
console.log("Multiply 9 * 7 = " + calculateProduct(9, 7));

// Calculate Quotient = Divide
function calculateQuotient(num1, num2) {
  // If statement - Division by zero = infinity, this creates error instead
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
};

console.log("Divide 7 / 11 = " + calculateQuotient(7, 11));
console.log("Divide 3 / 0 = " + calculateQuotient(3, 0));

// Calculate Square = Square Number
function calculateSquare(num) {
  return num ** num;
};

console.log("Square Number of 2 = " + calculateSquare(2));
console.log("Square Number of 9 = " + calculateSquare(9));

// Calculate Square = Square Root
function calculateSquareRoot(num) {
  return Math.sqrt(num);
};

console.log("Square Root of  = " + calculateSquareRoot(25));
console.log("Square Root of  = " + calculateSquareRoot(100));