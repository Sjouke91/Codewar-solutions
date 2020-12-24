function towerBuilder(nFloors) {
  let tree = [];
  let line = "";
  const dots = nFloors * 2 - 1;

  for (let i = 1; i <= nFloors; i++) {
    for (let j = 1; j <= dots; j++) {
      const dotsOnLine = i * 2 - 1;
      if (
        j <= (dots - dotsOnLine) / 2 ||
        j > dotsOnLine + (dots - dotsOnLine) / 2
      ) {
        line = line.concat(" ");
      } else {
        line = line.concat("*");
      }
    }
    tree.push(line);
    line = "";
  }
  return tree;
}
console.log(towerBuilder(5));
