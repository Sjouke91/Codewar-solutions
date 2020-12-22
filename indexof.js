function indexOf(str, char) {
  let index = [];
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    if (str[i] === char) {
      index.push(i);
    }
  }

  return index;
}

console.log(indexOf("hello world", "l")); // 6
