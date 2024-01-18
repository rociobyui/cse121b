
// To add text with JavaScript
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//To add a image with JavaScript
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of the image");
document.body.appendChild(newImage);

//If we have more complex HTML to add we can insert a whole string in at once.
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

//Creating a new section in the JavaScript file. First option for me.
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);

//Second option for the creation of a new section.
/* const newSection = document.createElement("section");
    const newH2 = document.createElement("h2");
    newH2.innerText = "CSE 121b";
    newSection.appendChild(newH2);
    const newP = document.createElement("p");
    newH2.innerText = "Welcome to Javascript Language";
    newSection.appendChild(newP);  */

document.body.appendChild(newSection);