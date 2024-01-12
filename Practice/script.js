// Function: creates a new paragraph and appends it to the bottom of the HTML body.
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  

  /*
  1. Get references to all the buttons on the page in an array format.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }

  //COMMENTS
  //There are two types: (like this a single line comment is written after a double forward slash (//))
  /*I am also 
  a comment. A multi-line comment is written between the strings /* and */ */