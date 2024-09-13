const removeFromArray = function (array, ...removed) {
  let keepGoing = true;
  while (keepGoing === true) {
    keepGoing = false;
    for (i in array) {
      for (j in removed) {
        if (array[i] === removed[j]) {
          array.splice(i, 1);
          keepGoing = true;
        }
      }
    }
  }
  return array;
};
console.log(
  `Array with items removed: ${removeFromArray([1, 2, 3, 3, 4], 3, 4)}`
);
// Do not edit below this line
module.exports = removeFromArray;
