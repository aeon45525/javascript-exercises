const convertToCelsius = function (f) {
  const CEL = ((f - 32) * 5) / 9;
  return Math.round(CEL * 10) / 10;
};

const convertToFahrenheit = function (c) {
  const FAH = (c * 9) / 5 + 32;
  return Math.round(FAH * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
