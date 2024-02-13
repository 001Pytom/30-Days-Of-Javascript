// exercise1
let firstDiv = document.createElement("div");
let body = document.documentElement;
const container = document.createElement("div");

firstDiv.innerHTML = `
 <h1>Number Generator</h1>
 <a class="secondHeading" href="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/images/projects/dom_min_project_day_number_generators_2.1.png">30DaysOfJavaScript:DOM
 Day2</a>
<a class="my-name" href="#">Author:Faatihat Mohammed</a>`;

// Access the elements with specific classes inside the firstDiv
const secondHeading = firstDiv.querySelector(".secondHeading");
const myName = firstDiv.querySelector(".my-name");

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

// Style the secondHeading and myName elements
secondHeading.style.color = "#000";
myName.style.color = "#000";

// get the boxes
for (let i = 0; i <= 101; i++) {
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
container.style.width = "45vw";
container.style.display = "grid";
const containerWidth = 45; // Maximum container width in viewport width units (vw)
const numColumns = 7;
const viewportWidth = window.innerWidth;
const itemWidth = (viewportWidth * (containerWidth / 100)) / numColumns; // Calculate item width based on container width and number of columns
container.style.gridTemplateColumns = `repeat(auto-fill, minmax(${itemWidth}px, 1fr))`;
container.style.gap = "5px";
firstDiv.insertAdjacentElement("afterend", container);
