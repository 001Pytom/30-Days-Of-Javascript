// Taking all elements
const wrapper = document.querySelector(".wrapper");
const body = document.documentElement;
const ul = document.querySelector("ul");
let listItems = ul.querySelectorAll("li");
const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const yearElement = document.getElementById("year");
const newDiv = document.createElement("div");
const newParagraph = document.createElement("p");

// styling the body
let styleBody = () => {
  body.style.width = "100vw";
  body.style.height = "100vh";
  body.style.fontFamily = "sans-serif";
};

// styling the wrapper
function styleWrapper() {
  wrapper.style.width = "50vw";
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.gap = "40px";
}

// styling ul
let styleListItems = () => {
  ul.style.listStyleType = "none";

  listItems.forEach((item) => {
    item.style.padding = "20px";
    item.style.width = "100%";
    item.style.marginBottom = "3px";
  });

  // styling first two list
  for (let i = 0; i < Math.min(listItems.length, 2); i++) {
    if (i === 0) {
      listItems[i].style.backgroundColor = "green";
    } else {
      listItems[i].style.backgroundColor = "yellow";
    }
  }
  // styling reminaing list
  for (let i = 2; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = "orangered"; // Change color for the rest of the items
  }
};

// styling headers
let styleHeaders = () => {
  // styling h1
  h1.style.textAlign = "center";
  h2.style.textAlign = "center";

  // styling h2
  h2.style.fontWeight = "lighter";
  h2.style.fontSize = "20px";
  h2.style.textDecoration = "underline";
};

// Change color of year element
let index = 0;
let colors = ["red", "green", "blue", "yellow", "orangered", "pink"];

let changeColor = () => {
  yearElement.style.color = colors[index];
  yearElement.style.fontSize = "4vw";
  index++;

  // Reseting the index if it exceeds the length of the colors array
  if (colors.length === index) {
    index = 0;
  }
};

// create a div for date after
let createDivWithDate = () => {
  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  newParagraph.textContent = formattedDate;
  newParagraph.style.fontWeight = "bold";
  newParagraph.style.fontSize = "14px";
  newDiv.appendChild(newParagraph);
  // put div ahfter h2
  h2.insertAdjacentElement("afterend", newDiv);
  newDiv.style.textAlign = "center";
  newDiv.style.width = "15vw";
  newDiv.style.margin = "auto";
  newDiv.style.padding = "13px";
};

let changeColor2 = () => {
  newDiv.style.backgroundColor = colors[index];
  index++;

  // Reseting the index if it exceeds the length of the colors array
  if (colors.length === index) {
    index = 0;
  }
};

styleBody();
styleWrapper();
styleListItems();
styleHeaders();
createDivWithDate();

setInterval(changeColor2, 1000);
setInterval(changeColor, 1000);
