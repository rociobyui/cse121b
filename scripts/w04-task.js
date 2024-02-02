/* LESSON 3 - Programming Tasks */

/* Profile Object
1. Declare a new object literal variable named myProfile to hold information about yourself and assign an empty object to the variable.  */
let myProfile = {
    // Add a property to this object literal named name and set its value to be your name as a string.
    name : "Rocio Cedillo", 
    // 3. Add a property named photo. Set its value to be an image's path and name (one used in the Programming Tasl 2) as a string.
    photo : "images/myimage.png",
    // 4. Add a property named favoriteFoods. Set its value to be an array of your favorite foods as strings.
    favoriteFoods : ["Soups", "Mango", "Strawberries", "Oranges"],
    // 5. Add a property named hobbies. Set its value to be an array of your hobbies as strings.
    hobbies: ["Watching Movies", "Swimming", "Cooking", "Reading the Scriptures"],
    // 6. Add a property named placesLived. Set its value to be an empty array.
    placesLived : [],
};

/* Populate Profile Object with placesLive objects */
// 7. Using code outside of the myProfile definition, add an item to the placesLived array where this new item itself is object with two properties: place and length and for each of these properties, add appropriate values as strings.
// 8. Add additional object literals with appropriate values to the placesLived array for each place you have lived.
myProfile.placesLived.push(
    { place : "Puebla, Mexico", lenght : "24 years" },
    { place : "Mexico City", lenght : "12 years"},
    { place: "Shelton, WA", lenght : "2 years"},
    { place : "Olympia, WA", lenght : "18 years"},
); 

/* DOM Manipulation - Output */

/* Name */
// 1. Assign the value of the name property of the myProfile object to the HTML element with an ID of name.
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
// 2. Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo.
document.querySelector("#photo").src = myProfile.photo;
// 3. Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo.
document.querySelector("#name").alt = myProfile.photo;

/* Favorite Foods List. 4. For each favorite food in the favoriteFoods property: Use a forEach loop to iterate over the favoriteFoods array.*/
myProfile.favoriteFoods.forEach(food => {
    // 1. create an HTML <li> element
    let li = document.createElement("li");
    // 2. place the value of the favoriteFoods array element into the textContent of this new li element, and then
    li.textContent = food;
    // 3. append this new <li> element with content as a child of the HTML <ul> element with an ID of favorite-foods.
    document.querySelector("#favorite-foods").appendChild(li);
});

/* What is the difference between append method and the appendChild() method when it comes to manipulating the DOM and adding elements to a parent element?
// The Element.append(accepts multiples nodes and strings at once) method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.
// The appendChild(accepts one node) method of the Node interface adds a node to the end of the list of children of a specified parent node.

/* Hobbies List. 5. Repeat the previous process of creating a list of items for each hobby in the hobbies property of the object and appending each item to the HTML <ul> element with an ID of hobbies.*/
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList. 6. For each object in the placesLived property: */
myProfile.placesLived.forEach(place => { 
    // Create an HTML <dt> element and put its place property in the <dt> element.
    let dtElement = document.createElement("dt");
    dtElement.textContent = place.place;
    // Create an HTML <dd> element and put its length property in the <dd> element.
    let ddElement = document.createElement("dd");
    ddElement.textContent = place.lenght;
    // Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived.
    let placesList = document.getElementById("places-lived"); // // Get the <dl> element by its ID. A description list (dl)
    placesList.append(dtElement, ddElement);
});
    
/*The element <dl> encloses a list of groups of terms (specified using the <dt> element) 
and descriptions (provided by <dd> elements). The dt tag stands for "definition term" and is used to define the 
term being defined in the list. It is typically used to display the term being defined in bold or emphasized 
text. The dd tag stands for "definition description" and is used to define the description of the term being 
defined.*/






