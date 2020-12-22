function getSum(a, b) {
  let x = a < b ? b - a : a - b;
  let startingValue = a < b ? a : b;
  let addedValue = 0;

  console.log(x);
  for (let i = 0; i <= x; i++) {
    addedValue = addedValue + startingValue++;
  }

  return addedValue;
}

console.log(getSum(375, 236));

//best practice

const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};
