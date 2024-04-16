const convertToCelsius = function(fahrenheit) {
  let result = (fahrenheit - 32) / 1.8;
  return +result.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let result = celsius * 1.8 + 32;
  return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
