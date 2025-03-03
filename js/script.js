const redBtn = document.querySelector('input[value="red"]');
const greenBtn = document.querySelector('input[value="green"]');
const whiteBtn = document.querySelector('input[value="white"]');
const body = document.querySelector("body");

redBtn.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

greenBtn.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});

whiteBtn.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});

//--2--

const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("#name-output");

inputElement.addEventListener("input", inputFunct);

function inputFunct(event) {
  console.log(event.currentTarget.value);
  spanElement.textContent = event.currentTarget.value;
  if (event.currentTarget.value == "") {
    event.currentTarget.value == "незнайомець";
  }
}
