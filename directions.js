function dirReduc(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], arr[i + 1]);

    if (
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST")
    ) {
      i++;
    } else {
      if (
        (result[result.length - 1] === "SOUTH" && arr[1] === "NORTH") ||
        (result[result.length - 1] === "NORTH" && arr[1] === "SOUTH") ||
        (result[result.length - 1] === "WEST" && arr[1] === "EAST") ||
        (result[result.length - 1] === "EAST" && arr[1] === "WEST")
      ) {
        result.pop();
      } else {
        result.push(arr[i]);
      }
    }
  }

  return result;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
