// script.js

const convertBtn = document.getElementById('convert-btn');
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  if (!isNaN(temperature)) {
    let convertedTemperature;

    if (unit === 'celsius') {
      convertedTemperature = celsiusToFahrenheit(temperature);
    } else if (unit === 'fahrenheit') {
      convertedTemperature = fahrenheitToCelsius(temperature);
    } else if (unit === 'kelvin') {
      convertedTemperature = kelvinToCelsius(temperature);
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemperature} ${getUnitSymbol(unit)}`;
  }
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (
