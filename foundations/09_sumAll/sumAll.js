const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

  const toSum = [];

  if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      toSum.push(i);
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      toSum.push(i);
    }
  }

  const total = toSum.reduce((prev, curr) => prev + curr, 0);
  return total;
};

// Do not edit below this line
module.exports = sumAll;
