let words = [
  "Motivational Speaker",
  "Content Creator",
  "Educator",
  "Instructor",
  "programmer",
  "Motivator",
];
let icons = ["🔥", "📕", "🍀", "📖", "🧑🏽‍💻", "🔥"];

// Get references to the HTML elements
const pElement = document.querySelector(".p");
const iconElement = document.querySelector(".icon");

// Function to display words one after the other with animation
function displayWordsWithAnimation(words, icons) {
  let index = 0;

  function displayNextWord() {
    // Check if there are more words to display
    if (index < words.length) {
      pElement.textContent = words[index];
      pElement.classList.add("p");

      // Update the icon
      iconElement.className = "icon " + icons[index];
      iconElement.textContent = [icons[index]];

      // Increment the index for the next word
      index++;
      if (index >= words.length) {
        index = 0;
      }

      // Schedule the removal of the animation class after the animation duration
      setTimeout(() => {
        pElement.classList.remove("p");
      }, 1000);

      setTimeout(displayNextWord, 1500);
    }
  }
  displayNextWord();
}

displayWordsWithAnimation(words, icons);
