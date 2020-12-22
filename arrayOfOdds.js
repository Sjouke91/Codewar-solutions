function findOdd(A) {
  uniq = [...new Set(A)];

  var counts = {};

  for (var i = 0; i < A.length; i++) {
    var num = A[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  const newArray = uniq.map((ar) => {
    return { number: ar, amount: counts[ar] };
  });

  const number = newArray.find((ar) => ar.amount % 2 !== 0);

  return number.number;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
