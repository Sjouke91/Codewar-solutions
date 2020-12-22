function duplicateEncode(word) {
  let newWord = "";
  const wordToLowerCase = word.toLowerCase();
  for (let i = 0; i < wordToLowerCase.length; i++) {
    let letter = wordToLowerCase[i];
    var re = new RegExp(letter, "g");
    let count = wordToLowerCase.match(re).length;
    console.log(count);
    if (count <= 1) {
      newWord = newWord.concat(")");
    } else {
      newWord = newWord.concat("(");
    }
  }
  return newWord;
}

console.log(duplicateEncode("(( @"));
