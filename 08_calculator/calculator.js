const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (num) {
  return num.reduce((total, current) => total + current, 0);
};

const multiply = function (num) {
  return num.reduce((total, current) => total * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let total = 1;
  for (i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
