const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0;
  for(const i of arr)
  {
    total += i;
  }

  return total;
};

const multiply = function(arr) {
  let total = 1;
  for(const i of arr)
  {
    total *= i;
  }
  return total;
};

const power = function(a, b) {
	let total = 1;
  for(let x = 0; x < b; x++)
  {
    total *= a;
  }

  return total;
};

const factorial = function(a) {
	let fact = 1;
  for(let x = 1; x <= a; x++)
  {
    fact *= x;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
