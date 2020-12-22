function maskify(cc) {
  if (cc.length < 4) return cc;
  const last4Characters = cc.substr(-4);
  // const maskingCharacters = cc.substr(1, cc.length - 4).replace(/\d/g, '#');
  var str1 = "";
  var str2 = "#";
  for (let i = 0; i < cc.length - 4; i++) {
    str1 = str1.concat(str2);
  }

  return `${str1}${last4Characters}`;
}

console.log(maskify("hellomyfriends"));
