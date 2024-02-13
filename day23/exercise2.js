const h1 = document.querySelector(".h1");
const span = document.querySelector("span");
const number = document.querySelector(".number");
const body = document.documentElement;

window.addEventListener("load", () => {
  h1.innerHTML = ` <h1>Press any keyboard key </h1>`;
});

body.addEventListener("keydown", (e) => {
  number.style.display = "block";
  let userInputKeyCode = e.keyCode;
  let userInput = e.key;

  // Update the content of the span element to display the pressed key
  span.textContent = userInput;
  //set nuber to keycode
  number.textContent = userInputKeyCode;
  // Update the content of the h1 element to indicate which key was pressed
  h1.innerHTML = `<h1>You pressed <span>${userInput}</span></h1>`;
});
