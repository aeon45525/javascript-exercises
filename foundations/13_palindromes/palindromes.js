const palindromes = function (string) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const clean = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  const reverse = clean.split("").reverse().join("").toLowerCase();
  if (reverse === clean) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
