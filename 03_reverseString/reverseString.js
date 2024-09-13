const reverseString = function (string) {
  let stringReversed = "";
  for (char of string) {
    stringReversed = char + stringReversed;
  }
  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
