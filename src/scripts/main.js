import CalculateMinutes from "./calculate-minutes.js";
import CalculateDaysPerEightHours from "./calculate-days-per-eight-hours.js";
import EstimateCalculator from "./estimate-calculator.js";

/**
 * @type {HTMLInputElement | null}
 */
const days = document.getElementById('input-days');

/**
 * @type {HTMLInputElement | null}
 */
const hours = document.getElementById('input-hours');

/**
 * @type {HTMLInputElement | null}
 */
const minutes = document.getElementById('input-minutes');

/**
 * @type {HTMLHeadingElement | null}
 */
const calculatorResult = document.getElementById('calculator-result');

/**
 * @type {HTMLButtonElement}
 */
const pasteButton = document.querySelector('.calculator-result__paste-button');

const form = document.querySelector('form');

form.onsubmit = (event) => {
  event.preventDefault();
  let estimate = new EstimateCalculator(
    new CalculateDaysPerEightHours(Number(days.value)), 
    Number(hours.value),
    new CalculateMinutes(Number(minutes.value))
  );

  calculatorResult.innerText = estimate.calculate();
}

form.onreset = (event) => {
  event.preventDefault();

  days.value = 0;
  hours.value = 0;
  minutes.value = 0;
}

pasteButton.onclick = () => {
  if (calculatorResult.innerText !== "") {
    navigator.clipboard.writeText(calculatorResult.innerText)
      .then(() => {
        alert("The result has been copied!")
      });
  } else {
    alert("There is no result yet.");
  }
}