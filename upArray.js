// function upArray(arr) {
//   if (arr.some((v) => v < 0)) {
//     return null;
//   }
//   const newArr = arr.map((a, i) => {
//     if (i === arr.length - 2 && arr[arr.length - 1] === 9) {
//       return a + 1;
//     } else if (i === arr.length - 1 && arr[arr.length - 1] === 9) {
//       console.log("got run");
//       return a - 9;
//     } else if (i === arr.length - 1 && arr[arr.length - 1] !== 9) {
//       return a + 1;
//     }
//     return a;
//   });
//   return newArr;
// }
// function upArray(arr) {
//   if (arr.some((v) => v < 0 || v > 9) || arr.length === 0) {
//     return null;
//   }

//   const endArray =
//     arr.length <= 4 ? arr : arr.slice(arr.length - 4, arr.length);
//   const beginArray = arr.length <= 4 ? [] : arr.slice(0, arr.length - 4);

//   const newArray = parseInt(endArray.toString().replace(/,/g, "")) + 1;

//   let arrayFromString = Array.from(String(newArray), Number);

//   if (arrayFromString.length < 3) {
//     arrayFromString.unshift(0);
//   }

//   return beginArray.concat(arrayFromString);
// }

// console.log(upArray([4, 1, 0, 5, 4, 2, 2, 0, 2, 0, 0, 9, 9]));

const BigNumber = require("bignumber.js");

const upArray = (arr) =>
  arr.length === 0 || arr.filter((x) => x < 0 || x > 9).length > 0
    ? null
    : new BigNumber(arr.join("")).plus(1).toPrecision().split("").map(Number);
