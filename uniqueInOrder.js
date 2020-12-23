var uniqueInOrder = function (iterable) {
  let output = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i + 1]) {
    } else {
      output = output.concat(iterable[i]);
    }
  }
  return output;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

//best practice
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
