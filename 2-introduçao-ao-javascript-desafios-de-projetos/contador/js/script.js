var currentNumberWrapper = document.getElementById("currentNum");
var decrementButton = document.getElementById("decrement");
var incrementButton = document.getElementById("increment");
var currentNumber = 0;

decrementButton.addEventListener("click", handlerDecrementButton);

incrementButton.addEventListener("click", handlerIncrementButton);

function handlerDecrementButton() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if (currentNumber <= -10) {
    decrementButton.disabled = true;
  }
  if (currentNumber > -10) {
    incrementButton.removeAttribute("disabled");
  }
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = "#c11";
  }
}
function handlerIncrementButton() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if (currentNumber >= 10) {
    incrementButton.disabled = true;
  }
  if (currentNumber < 10) {
    decrementButton.removeAttribute("disabled");
  }
  if (currentNumber >= 0) {
    currentNumberWrapper.style.color = "#383737";
  }
}
