function meeting(s) {
  const newStr = s.split(";");

  const newArray = newStr.map((name) => {
    const spaceName = name.replace(/:/g, " ");

    const firstName = spaceName.split(" ").slice(0, -1).join(" ").toUpperCase();
    const lastName = spaceName.split(" ").slice(1).join(" ").toUpperCase();

    return `${lastName}, ${firstName}`;
  });
  const sortedArray = newArray.sort();

  const formattedArray = sortedArray
    .map((arr) => {
      return `(${arr})`;
    })
    .join("");

  return formattedArray;
}

// best practice
function meeting(s) {
  let string = s
    .toUpperCase()
    .split(";")
    .map((x) => x.split(":").reverse().join(", "))
    .sort()
    .join(")(");
  return "(" + string + ")";
}
