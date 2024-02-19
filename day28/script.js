"use strict";
// create div/element
const leaderboard = document.createElement("div");
leaderboard.classList.add("leaderboard");
const errorText = document.createElement("p");
const noInput = "";
const personLb = document.createElement("div");
const inputContainer = document.querySelector(".input_container");
const inputFN = document.getElementById("firstname_input");
const inputLN = document.getElementById("lastname_input");
const countryInput = document.getElementById("country_input");
const inputScore = document.getElementById("Input_score");
const btn = document.querySelector(".btn");

// function to get date
function getCurrentDateTime() {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");

  return `${month} ${day}, ${year} ${hours}:${minutes}`;
}

function saveEntry(entry) {
  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.push(entry);
  console.log(entry, "entry");
  localStorage.setItem("entries", entries);
  console.log(entries);
}

// function error message
let errorMessage = () => {
  // Check if the error message already exists
  if (!document.querySelector(".error-text")) {
    const errorText = document.createElement("p");
    errorText.textContent = "All Fields Are Required";
    errorText.classList.add("error-text");
    errorText.style.color = "red";
    errorText.style.fontWeight = "bold";
    inputContainer.insertAdjacentElement("afterend", errorText);
  }
};

btn.addEventListener("click", () => {
  if (
    inputFN.value === noInput ||
    inputLN.value === noInput ||
    countryInput.value === noInput ||
    inputScore.value === noInput
  ) {
    errorMessage();
  } else {
    // Remove error message if it exists
    const existingError = document.querySelector(".error-text");
    if (existingError) {
      existingError.remove();
    }

    // remaining functions
    const currentDateTime = getCurrentDateTime();
    const personLb = document.createElement("div");
    personLb.innerHTML = ` <div class="personal_details">
    <h4 class="name">${inputFN.value} ${inputLN.value}</h4>
    <p class="date">${currentDateTime}</p>
    </div>
    <div class="countyr">${countryInput.value}</div>
    <div class="score"> ${inputScore.value}</div>
    <div class="fxn">
    <div class="delete">❌</div>
    <div class="increase">+5</div>
    <div class="decrease">-5</div>
    </div>`;
    personLb.classList.add("personLB");
    leaderboard.appendChild(personLb);
    let inputDel = personLb.querySelector(".delete");
    let addInput = personLb.querySelector(".increase");
    let subInput = personLb.querySelector(".decrease");
    let newinputScore = personLb.querySelector(".score");

    inputDel.addEventListener("click", () => {
      personLb.style.display = "none";
    });
    addInput.addEventListener("click", () => {
      let scoreVal = Number(newinputScore.textContent);
      scoreVal += 5;
      newinputScore.textContent = scoreVal;
    });

    subInput.addEventListener("click", () => {
      let scoreVal = Number(newinputScore.textContent);
      scoreVal -= 5;
      newinputScore.textContent = scoreVal;
    });

    saveEntry(personLb);
  }

  // Clear input fields after submission
  inputFN.value = "";
  inputLN.value = "";
  countryInput.value = "";
  inputScore.value = "";
});
inputContainer.insertAdjacentElement("afterend", leaderboard);
