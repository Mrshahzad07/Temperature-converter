const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const convertButton = document.getElementById('convert-button');
const resultDisplay = document.getElementById('result');

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  if (isNaN(temperature)) {
    alert('Please enter a valid number!');
    return;
  }
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  let convertedTemp;
  if (fromUnit === 'celsius') {
    if (toUnit === 'fahrenheit') {
      convertedTemp = (temperature * 9/5) + 32;
    } else if (toUnit === 'kelvin') {
      convertedTemp = temperature + 273.15;
    } else {
      convertedTemp = temperature; // No conversion needed if converting to Celsius
    }
  } else if (fromUnit === 'fahrenheit') { // Added 'else if' for Fahrenheit
    if (toUnit === 'celsius') {
      convertedTemp = (temperature - 32) * 5/9;
    } else if (toUnit === 'kelvin') {
      convertedTemp = (temperature + 459.67) * 5/9;
    } else {
      convertedTemp = temperature; // No conversion needed if converting to Fahrenheit
    }
  } else if (fromUnit === 'kelvin') { // Added 'else if' for Kelvin
    if (toUnit === 'celsius') {
      convertedTemp = temperature - 273.15;
    } else if (toUnit === 'fahrenheit') {
      convertedTemp = (temperature * 9/5) - 459.67;
    } else {
      convertedTemp = temperature; // No conversion needed if converting to Kelvin
    }
  }

  resultDisplay.textContent = `${temperature}°${fromUnit} is equal to ${convertedTemp.toFixed(2)}°${toUnit}`;
}

convertButton.addEventListener('click', convertTemperature);
