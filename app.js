let display = document.querySelector(".result");
let num1 = document.querySelector(".number1");
let num2 = document.querySelector(".number2");
let operator = document.querySelector("#operator");
let btn = document.querySelector(".calcBtn");
let result;

btn.addEventListener("click", function () {
  if (operator.value === "+") {
    result = Number(num1.value) + Number(num2.value);
    display.textContent = result;
  }
  if (operator.value === "-") {
    result = Number(num1.value) - Number(num2.value);
    display.textContent = result;
  }
  if (operator.value === "/") {
    result = Number(num1.value) / Number(num2.value);
    display.textContent = result;
  }
  if (operator.value === "*") {
    result = Number(num1.value) * Number(num2.value);
    display.textContent = result;
  }
  num1.value = "";
  num2.value = "";
});
