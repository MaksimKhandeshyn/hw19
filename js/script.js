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
    spanElement.textContent == "незнайомець";
  }
}

const validatorElement = document.querySelector("#validation-input");
validatorElement.addEventListener("focus", (event) => {
  const valueElement = event.currentTarget.value;
  if (valueElement.length === 6) {
    console.log(valueElement);
    validatorElement.style.border = "2px solid green";
  } else {
    validatorElement.style.border = "2px solid red";
  }
});

//--3--

const controlEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
const textElem = parseInt(spanEl.style.fontSize);

controlEl.addEventListener("input", (event) => {});

console.log(textElem);
