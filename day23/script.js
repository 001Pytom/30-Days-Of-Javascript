// exercise1
let firstDiv = document.createElement("div");
let body = document.documentElement;
const container = document.createElement("div");
let inputContaitner = document.createElement("div");

firstDiv.innerHTML = `
 <h1 class="h1">Number Generator</h1>
 <a class="secondHeading" href="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/images/projects/dom_min_project_day_number_generators_2.1.png">30DaysOfJavaScript:DOM
 Day2</a>
<a class="my-name" href="#">Author:Faatihat Mohammed</a>`;

inputContaitner.innerHTML = `
<p></p>
<div class ="inputDiv">
<input type="text" placeholder="Generate More Numbers">
<button>Generate numbers</button>
</div>
`;

// Access the elements with specific classes inside the firstDiv
const secondHeading = firstDiv.querySelector(".secondHeading");
const myName = firstDiv.querySelector(".my-name");
const h1 = firstDiv.querySelector(".h1");
const input = inputContaitner.querySelector("input");
const btn = inputContaitner.querySelector("button");
let errorMessage = inputContaitner.querySelector("p");
let inputDiv = inputContaitner.querySelector(".inputDiv");

body.style.fontFamily = "sans-serif";

// Append the firstDiv to the document body
document.body.appendChild(firstDiv);

// style the div for the header
firstDiv.style.display = "flex";
firstDiv.style.flexDirection = "column";
firstDiv.style.width = "100%";
firstDiv.style.maxWidth = "50vw";
firstDiv.style.gap = "10px";
firstDiv.style.alignItems = "center";

// Style the secondHeading, h1 and myName elements
h1.style.color = "lightgreen";
secondHeading.style.color = "#000";
secondHeading.style.textDecoration = "none";
myName.style.color = "#000";
myName.style.textDecoration = "none";

//
// inputContaitner.style.backgroundColor = "blue";
inputContaitner.style.width = "55vw";
inputContaitner.style.paddingLeft = "7vw";
inputContaitner.style.display = "flex";
inputContaitner.style.flexDirection = "column";
inputDiv.style.width = "100%";
inputDiv.style.display = "flex";
input.style.flex = 1;
input.style.padding = "0.9vw";
input.style.border = "2px solid lightgreen";
input.style.outline = "lightgreen";
btn.style.fontSize = "18px";
btn.style.padding = ".4vw";
btn.style.color = "#fff";
btn.style.backgroundColor = "lightgreen";
btn.style.border = "2px solid lightgreen";

// consitional statement forthe input
btn.addEventListener("click", () => {
  let inputvalue = input.value;
  errorMessage.style.color = "red";
  if (inputvalue.trim() === "") {
    errorMessage.textContent =
      "Enter number value to the input field to generate a number";
  } else if (isNaN(inputvalue)) {
    errorMessage.textContent = "Input value must be a number";
  } else {
    // Clear previous boxes
    container.innerHTML = "";
    // Generate new boxes
    generateNumbers(inputvalue);
  }
});

//function to create boxes with colors and numbers
let generateNumbers = (num) => {
  for (let i = 0; i <= num; i++) {
    const littleDivs = document.createElement("div");
    littleDivs.style.textAlign = "center";
    littleDivs.style.padding = "16px";
    littleDivs.textContent = i;

    //   check if it is even
    if (i % 2 === 0) {
      littleDivs.style.backgroundColor = "lightgreen";
    } else if (i % 2 !== 0) {
      //check for odd
      littleDivs.style.backgroundColor = "yellow";
    }

    //   check if it is prime
    if (i == 1) {
      littleDivs.style.backgroundColor = "yellow";
    } else {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        littleDivs.style.backgroundColor = "red";
      }
    }

    container.appendChild(littleDivs);
  }
};

container.style.width = "55vw";
container.style.display = "grid";
const containerWidth = 45; // Maximum container width in viewport width units (vw)
const numColumns = 7;
const viewportWidth = window.innerWidth;
const itemWidth = (viewportWidth * (containerWidth / 100)) / numColumns; // Calculate item width based on container width and number of columns
container.style.gridTemplateColumns = `repeat(auto-fill, minmax(${itemWidth}px, 1fr))`;
container.style.gap = "5px";
firstDiv.insertAdjacentElement("afterend", container);

// append the input div  to before the conatiner div
container.insertAdjacentElement("beforebegin", inputContaitner);
