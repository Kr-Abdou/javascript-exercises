const convertToCelsius = function(deg) {
  let newDeg = (deg-32) * 5/9;
  if (newDeg % 1 === 0) return newDeg;
  return Number(newDeg.toFixed(1));
};

const convertToFahrenheit = function(deg) {
  let newDeg = (deg*(9/5)) +32
  if (newDeg % 1 === 0) return newDeg;
  return Number(newDeg.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
