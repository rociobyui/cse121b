/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Declare and instatiate (instatiate in java means to call a constructor of class which initializes the new object) Variables that hold my name, current year, and profilePicture. I can use "let", but because it will not change "const" because it will never change.  */
const fullName = "Maria del Rocio Cedillo Sanchez";
const currentYear = new Date().getFullYear(); //"2024";
const profilePicture = "images/myimage.png";

/* Step 3 - Declare Element Variables. Setting the HTML Element Variables by Using methods to get the HTML elemts"id".  
the */
const nameElement = document.querySelector("#name");
const foodElement = document.querySelector("#food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

// Step 4 - Assigning the nameElement's innerHTML property the fullName variable value. Adding Content to the Document */
//Template literal to create the string with HTML tags. Template literals are literals delimited with backtick (`)The textContent property instead of innerHTML in this example would not work because the expression contains HTML 
//markup that needs to be rendered. Using textContent will render the HTML markup as text, which is not what is wanted.*/
nameElement.innerHTML = `<strong>${fullName}</strong>`; 
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `This is ${fullName}.`);

/* Step 5 - Declare an Array variable to hold your favorite foods.*/
let favFoods = ["Corn Soup", "Cranberry Juice", "Strawberry", "Orange"];
foodElement.innerHTML = favFoods;
let newFood = "Milk"; // Declare and instantiate a variable to hold another single favorite food item.
favFoods.push(newFood); // Add the value stored in this new variable to your favorite food array.
foodElement.innerHTML += `<br>${favFoods}`; //Append the new array values onto the displayed content of the HTML element with the id of food using a += operator and a <br> (line break character) to provide a line break as shown in Figure 2.
favFoods.shift(); // Remove the first element in the favorite food array.
foodElement.innerHTML += `<br>${favFoods}`; //Append again the new array output values onto the displayed content of the HTML element with the id of food using a += operator and a <br> (line break character) to provide a line break.
favFoods.pop(); // Remove the last element in the favorite food array.
foodElement.innerHTML += `<br>${favFoods}`; //Append the new array values onto the displayed content of the HTML element with the id of food using a += operator and a <br> (line break character) to provide a line break.





