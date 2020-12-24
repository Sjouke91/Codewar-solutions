// function isPangram(string) {
//   const toLower = string.toLowerCase();
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let count = [];

//   for (let i = 0; i < toLower.length; i++) {
//     for (let j = 0; j < alphabet.length; j++) {
//       if (toLower[i] === alphabet[j] && count.includes(toLower[i]) !== true) {
//         count.push(toLower[i]);
//       }
//     }
//   }
//   return count.length === 26 ? true : false;
// }

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
