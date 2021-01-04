function multiplicationTable(row, col) {
  const rowArray = [];
  const table = [];

  for (let i = 0; i < col; i++) {
    rowArray.push(i + 1);
  }

  for (let j = 0; j < row; j++) {
    table.push(rowArray.map((num) => num * (j + 1)));
  }

  return table;
}

console.log(multiplicationTable(3, 4));
