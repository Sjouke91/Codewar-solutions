function incrementString(str) {
  if (str.match(/\d+/) === null) {
    return str.concat("1");
  }

  const number = parseInt(str.match(/\d+/)[0]) + 1;
  const numLeadingZero = str.match(/\d+/)[0].length - number.toString().length;

  let leadingZeros = "";
  for (let i = 0; i < numLeadingZero; i++) {
    leadingZeros = leadingZeros.concat("0");
  }

  const newNumber = leadingZeros.concat(number.toString());
  const string = str.replace(/[0-9]/g, "");

  return string.concat(newNumber);
}

console.log(incrementString("foobar99"));
