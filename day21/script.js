// exercise1
/*
Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
Get each of the the paragraph using document.querySelector('#id') and by their id
Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
Loop through the nodeList and get the text content of each paragraph
Set a text content to paragraph the fourth paragraph,Fourth Paragraph
Set id and class attribute for all the paragraphs using different attribute setting methods
*/

const firstP = document.querySelector("p");
const firstPWithId = document.querySelector("#p1");
const secondPWithId = document.querySelector("#p2");
const thirdPWithId = document.querySelector("#p3");
const fourthPWithId = document.querySelector("#p4");

const allPAsNodeList = document.querySelectorAll("p");
allPAsNodeList.forEach((text) => {
  console.log(text.textContent);
});

fourthPWithId.textContent += ` Fourth Paragrahp pushing from js`;
firstPWithId.setAttribute("id", "newId1");
secondPWithId.setAttribute("id", "newId2");
thirdPWithId.setAttribute("id", "newId3");
fourthPWithId.setAttribute("id", "newId4");
// to set for classs, change id to class

thirdPWithId.className = "thirdClass";
console.log(thirdPWithId);

// Exercise: Level 2
/*Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
Set text content, id and class to each paragraph*/

firstPWithId.style.color = "red";
secondPWithId.style.backgroundColor = "red";
secondPWithId.style.color = "white";
secondPWithId.style.border = "3px solid pink";
thirdPWithId.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif;";

// Exercise: Level 3
