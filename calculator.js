// MAIN calculate function 

const calculate = function(input) {
  if (typeof input.num1 !== "number" || typeof input.num2 !== "number" ) {
    return 'First two inputs must be numbers.';
  }
  if (input.operation === 'add' || input.operation === '+') {
    return add(input.num1, input.num2);

  } else if (input.operation === 'subtract' || input.operation === "-") {
    return sub(input.num1, input.num2);

  } else if (input.operation === 'multiply' || input.operation === '*') {
    return mult(input.num1, input.num2);

  } else if (input.operation === 'divide' || input.operation === '/') {
    return div(input.num1, input.num2);

  } else if (input.operation === 'remainder' || input.operation === '%') {
    return mod(input.num1, input.num2);

  } else if (input.operation === 'exponate' || input.operation === '^') {
    return exp(input.num1, input.num2);

  } else {
    if (typeof input.operation === "string") {
      return `${input.operation} is not a valid operation.`;
    } else {
      return 'Please enter a valid operation.';
    }
    
  }
}

// OPERATION functions

const add = function(num1, num2) {
  return num1 + num2;
}
const sub = function(num1, num2) {
  return num1 - num2;
}
const mult = function(num1, num2) {
  return num1 * num2;
}
const div = function(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by 0"
  }
  return num1 / num2;
}
const mod = function(num1, num2) {
  return num1 % num2;
}
const exp = function(num1, num2) {
  return num1 ** num2;
}

// TESTING with example inputs 

// String operators:
const exAddInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
console.log(exAddInput);
console.log(calculate(exAddInput));

const exSubtractInput = {
  num1: 5,
  num2: 2,
  operation: 'subtract',
}
console.log(exSubtractInput);
console.log(calculate(exSubtractInput));

const exMultiplyInput = {
  num1: 3,
  num2: 5,
  operation: 'multiply',
}
console.log(exMultiplyInput);
console.log(calculate(exMultiplyInput));

const exDivideInput = {
  num1: 9,
  num2: 3,
  operation: 'divide',
}
console.log(exDivideInput);
console.log(calculate(exDivideInput));

const exRemainderInput = {
  num1: 8,
  num2: 3,
  operation: 'remainder',
}
console.log(exRemainderInput);
console.log(calculate(exRemainderInput));

const exExponateInput = {
  num1: 2,
  num2: 4,
  operation: 'exponate',
}
console.log(exExponateInput);
console.log(calculate(exExponateInput));

// Symbol Opertors:
const exAddInput2 = {
  num1: 3,
  num2: 5,
  operation: '+',
}
console.log(exAddInput2);
console.log(calculate(exAddInput2));

const exSubtractInput2 = {
  num1: 5,
  num2: 2,
  operation: '-',
}
console.log(exSubtractInput2);
console.log(calculate(exSubtractInput2));

const exMultiplyInput2 = {
  num1: 3,
  num2: 5,
  operation: '*',
}
console.log(exMultiplyInput2);
console.log(calculate(exMultiplyInput2));

const exDivideInput2 = {
  num1: 9,
  num2: 3,
  operation: '/',
}
console.log(exDivideInput2);
console.log(calculate(exDivideInput2));

const exRemainderInput2 = {
  num1: 8,
  num2: 3,
  operation: '%',
}
console.log(exRemainderInput2);
console.log(calculate(exRemainderInput2));

const exExponateInput2 = {
  num1: 2,
  num2: 4,
  operation: '^',
}
console.log(exExponateInput2);
console.log(calculate(exExponateInput2));

// Bad Inputs
const exBadFirstNum = {
  num1: "hiya",
  num2: 8,
  operation: "add",
}
console.log(exBadFirstNum);
console.log(calculate(exBadFirstNum));

const exBadSecondNum = {
  num1: 8,
  num2: "Yooooo",
  operation: "add",
}
console.log(exBadSecondNum);
console.log(calculate(exBadSecondNum));

const exBadOperation = {
  num1: 16,
  num2: 8,
  operation: 17,
}
console.log(exBadOperation);
console.log(calculate(exBadOperation));

const exBadOperation2 = {
  num1: 16,
  num2: 8,
  operation: 'mult',
}
console.log(exBadOperation2);
console.log(calculate(exBadOperation2));

const exBadDivide = {
  num1: 9,
  num2: 0,
  operation: '/',
}
console.log(exBadDivide);
console.log(calculate(exBadDivide));