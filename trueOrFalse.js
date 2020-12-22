function validParentheses(parens) {
  let countOpen = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      countOpen += 1;
    } else if (parens[i] === ")") {
      countOpen -= 1;
    }
    if (countOpen < 0) {
      return false;
    }
  }

  if (countOpen === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(validParentheses("(())((()())())"));

//best practice
function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}
