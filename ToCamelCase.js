function toCamelCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      newStr = newStr.concat(str[i + 1].toUpperCase());
      i++;
    } else {
      newStr = newStr.concat(str[i]);
    }
  }
  console.log(newStr);
  return newStr;
}

console.log(toCamelCase("hello-world-hi"));
