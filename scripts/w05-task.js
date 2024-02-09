/* W05: Programming Tasks */

/* 3. Declare and initialize global variables. Assignment Instructions:
Declare a const variable named templesElement that references the HTML 
div element that eventually will be populated with temple data. */
const templesElement = document.getElementById("temples"); // The document.querySelector method finds the first element in the document with the id "temples" and assigns it to the costant variable templesElement.
let templeList = []; // Declare a global empty array variable to store a list of temples named templeList.

/* 4. async displayTemples Function */
const displayTemples = (temples) =>  // Declare a function expression using const named displayTemples that uses an arrow function to accept a list of temples as an array argument.
    // My function logic here
    temples.forEach((temple) => {
        const articleElement = document.createElement("article"); // Create an HTML <article> element(createElemt).
        const h3Element = document.createElement("h3"); // Create an HTML <h3> element and add the temple's templeName property to this new element.
        h3Element.textContent = temple.templeName;
        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(h3Element, imgElement); // Using append() method for more than one child.
        articleElement.appendChild(imgElement); // Using append() method for more than one child.
        templesElement.appendChild(articleElement); // Appen the <article> element to the global templesElement variable declared in step 2.
    });

// Step 5 Function: getTemples(). Get JSON temple data using fetch().

const getTemples = async () => { // Async anonymous function. // Create another function expression called getTemples. Make it an async anonymous, arrow function.     
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");    
        // In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above.
        if (!response.ok) {
            throw new Error("Failed to fetch temple data");
        }
        // Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable you declared in Step 3 above. Make sure the the execution of the code waits here as well until it finishes.
        templeList = await response.json();
        displayTemples(templeList); // The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).    
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

/* 6. reset Function */
// Clear the displayed list of temples. Declare a function expression named reset that clears all of the <article> elements from the templesElement.
const reset = () =>  {
    templesElement.innerHTML = "";
};
    // Assuming that articleElement is the element that contains the <article> elements

/* 7. filterTemples Function */
const filterTemples = (temples) => {
    reset(); // Call of the reset()
    const filter = document.getElementById("filtered").value;
    switch(filter) {
        case "utah": 
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));  // "utah": filter for temples where the location contains "Utah" as a string.     
            break;
        case "notutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah"))); //  "notutah": filter for temples where the location does not contain "Utah" as a string.    
            break;
        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1))); // // Filter and display temples where the dedicated date is before 1950.      
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
        // Additional code block
    }
};

// Call getTemples()
getTemples();

/* 8. Event Listener */
document.getElementById("filtered").addEventListener("change", () => {filterTemples(templeList);
});
