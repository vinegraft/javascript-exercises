const sumAll = function (a, b) {
  let numStart = 0;
  let numEnd = 0;
  let numTotal = 0;
  for (arg in arguments) {
    if (arguments[arg] < 0) {
      return "ERROR";
    }
    if (arguments[arg] != Math.floor(arguments[arg])) {
      return "ERROR";
    }
    if (!Number.isInteger(arguments[arg])) {
      return "ERROR";
    }
  }
  if (a <= b) {
    numStart = a;
    numEnd = b;
  } else {
    numStart = b;
    numEnd = a;
  }
  for (i = numStart; i <= numEnd; i++) {
    numTotal += i;
  }
  return numTotal;
};
// Do not edit below this line
module.exports = sumAll;
