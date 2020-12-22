function zero(input) {
  if (input) {
    const number = input.number;
    const operator = input.operator;

    switch (operator) {
      case "*":
        return number * 0;
      case "/":
        return Math.floor(0 / number);
      case "+":
        return number + 0;
      case "-":
        return 0 - number;
    }
  }
  return 0;
}
function one(input) {
  if (input) {
    const number = input.number;
    const operator = input.operator;

    switch (operator) {
      case "*":
        return number * 1;
      case "/":
        return Math.floor(1 / number);
      case "+":
        return number + 1;
      case "-":
        return 1 - number;
    }
  }
  return 1;
}
function two(input) {
  if (input) {
    const number = input.number;
    const operator = input.operator;

    switch (operator) {
      case "*":
        return number * 2;
      case "/":
        return Math.floor(2 / number);
      case "+":
        return number + 2;
      case "-":
        return 2 - number;
    }
  }
  return 2;
}
function three(input) {
  if (input) {
    const number = input.number;
    const operator = input.operator;

    switch (operator) {
      case "*":
        return number * 3;
      case "/":
        return Math.floor(3 / number);
      case "+":
        return number + 3;
      case "-":
        return 3 - number;
    }
  }
  return 3;
}
function four(input) {
  if (input) {
    const number = input.number;
    const operator = input.operator;

    switch (operator) {
      case "*":
        return number * 4;
      case "/":
        return Math.floor(4 / number);
      case "+":
        return number + 4;
      case "-":
        return 4 - number;
    }
  }
  return 4;
}
function five(input) {
  if (input) {
    const number = input.number;
    const operator = input.operator;

    switch (operator) {
      case "*":
        return number * 5;
      case "/":
        return Math.floor(5 / number);
      case "+":
        return number + 5;
      case "-":
        return 5 - number;
    }
  }
  return 5;
}
function six(input) {
  if (input) {
    const number = input.number;
    const operator = input.operator;

    switch (operator) {
      case "*":
        return number * 6;
      case "/":
        return Math.floor(6 / number);
      case "+":
        return number + 6;
      case "-":
        return 6 - number;
    }
  }
  return 6;
}
function seven(input) {
  if (input) {
    const number = input.number;
    const operator = input.operator;

    switch (operator) {
      case "*":
        return number * 7;
      case "/":
        return Math.floor(7 / number);
      case "+":
        return number + 7;
      case "-":
        return 7 - number;
    }
  }
  return 7;
}
function eight(input) {
  if (input) {
    const number = input.number;
    const operator = input.operator;

    switch (operator) {
      case "*":
        return number * 8;
      case "/":
        return Math.floor(8 / number);
      case "+":
        return number + 8;
      case "-":
        return 8 - number;
    }
  }
  return 8;
}
function nine(input) {
  if (input) {
    const number = input.number;
    const operator = input.operator;

    switch (operator) {
      case "*":
        return number * 9;
      case "/":
        return Math.floor(9 / number);
      case "+":
        return number + 9;
      case "-":
        return 9 - number;
    }
  }
  return 9;
}

function plus(input) {
  return { number: input, operator: "+" };
}
function minus(input) {
  return { number: input, operator: "-" };
}
function times(input) {
  return { number: input, operator: "*" };
}
function dividedBy(input) {
  return { number: input, operator: "/" };
}

console.log(three(dividedBy(two())));

// best practice
var n = function (digit) {
  return function (op) {
    return op ? op(digit) : digit;
  };
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
  return function (l) {
    return l + r;
  };
}
function minus(r) {
  return function (l) {
    return l - r;
  };
}
function times(r) {
  return function (l) {
    return l * r;
  };
}
function dividedBy(r) {
  return function (l) {
    return l / r;
  };
}
