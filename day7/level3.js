// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

let userIdGeneratedByUser = (desiredLength, idNum) => {
  //   desiredLength = window.prompt("Enter desired length");
  //   idNum = window.prompt("Enter desired Number of ids:");

  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let idCount = 0;
  let generatedId = [];
  for (let i = 0; i < idNum; i++) {
    let randomId = "";

    for (let j = 0; j < desiredLength; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters[randomIndex];
    }

    idCount++;
    generatedId.push(randomId);
  }
  return generatedId;
};

console.log(userIdGeneratedByUser().join("\n"));

// Write a function name rgbColorGenerator and it generates rgb colors.

function generateRandomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

console.log(generateRandomRGB());
console.log(generateRandomRGB());
console.log(generateRandomRGB());
console.log(generateRandomRGB());
// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(numColors) {
  const hexCharacters = "0123456789ABCDEF";
  const colorsArray = [];

  for (let i = 0; i < numColors; i++) {
    let hexColor = "#";

    for (let j = 0; j < 6; j++) {
      const randomIndex = Math.floor(Math.random() * hexCharacters.length);
      hexColor += hexCharacters[randomIndex];
    }

    colorsArray.push(hexColor);
  }

  return colorsArray;
}

console.log(arrayOfHexaColors(5).join("\n"));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

let arrayOfRgbColors = (numRgb) => {
  let rgbArr = [];
  for (let j = 0; j < numRgb; j++) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    let rgbCombination = `rgb(${red}, ${green}, ${blue})`;
    rgbArr.push(rgbCombination);
  }
  console.log(rgbArr.join("\n"));
};
arrayOfRgbColors(4);

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb(hexColor) {
  hexColor = hexColor.replace("#", "");

  const red = parseInt(hexColor.substring(0, 2), 16);
  const green = parseInt(hexColor.substring(2, 4), 16);
  const blue = parseInt(hexColor.substring(4, 6), 16);

  return `rgb(${red}, ${green}, ${blue})`;
}

const hexColor = "#1a2b3c";
console.log(parseInt(hexColor.substring(4, 6), 16));
const rgbColor = convertHexaToRgb(hexColor);
console.log(rgbColor);

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// to do this,pick the first part of the rbg and convert it to base10
