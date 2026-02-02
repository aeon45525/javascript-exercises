const fibonacci = function (num) {
  if (typeof num === "string") num = Number(num);

  if (num === 1 || num === 2) return 1;
  else if (num === 0) return 0;
  else if (num < 0) return "OOPS";

  let prev = 1;
  let current = 1;
  let next = 0;
  for (let i = 3; i <= num; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
