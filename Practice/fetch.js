// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// 3. Add a new url that will return a list of pokemon instead of just one.
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);    
  }
}

/* Write the code for getPokemonList first. It should do the following:
1. Make a fetch request to the url passed in.
2. When the request finishes check to make sure it was ok.
3. If it was ok then convert the response to json.
4. Call the doStuffList function, passing in the data. */
async function getPokemonList(url) {
    const response = await fetch(url);
    // check to see if the fetch was successful.
    if (response.ok) {
        // the API will send us JSON... but we have to convert .json()
        // also returns a promise... so we wait it
        const data = await response.json();
        doStuffList(data);
    }
}

// 1. (This was done in the HTML file)Add an element to our HTML to hold the pokemon data... something like <section id="output"> </section>. 
  
function doStuff(data) {
    results = data;
    // 2. Get that element with javascript. (document.querySelector) 
    const outputElement = document.querySelector("#output");
    const html = `<h2>${results.name}</h2> 
                  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`; // In the doStuff function create a variable and build out the html that we want to display the information. (I recommend a template literal string).
    // Insert our HTML into the output element (innerHTML)
    outputElement.innerHTML = html;
    console.log("first: ", results);
  }

// 2. Get that (<ul>) element with Javascript
const outputList = document.querySelector("#outputList");

// Create two functions: function doStuffList(data) {} and function getPokemonList(url) {}
function doStuffList(data) {
    // 6. Move to the doStuffList function next. In the function start by console.logging data. Save everything and open your file in the browser. Take a look in the console at the structure of what got sent back. Notice that our list is inside of a property called results
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    let pokeList = data.results;
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;
        // note the += here...
        pokeListElement.innerHTML += html;
    });
}

getPokemon(url);
console.log("second: ", results);
getPokemonList(urlList);


/*Activity 1 #
Our doStuff function in the example at bottom is a bit underwhelming...lets 
make it do more than just console log out. It should really display 
the data that we retrieved to the user in the browser. We need a list! */
/*
function doStuff(data) {
  results = data;
  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);
*/


// Activity 3 - Stretch
/*Our pokemon list is not alphabetized...we should fix that.
Create a function: function sortPokemon(list) {}
Check out some documentation on Array.sort. MDN: Sort. Notice that it provides an example compare function at the bottom...we can use that as a model. */
function compare(a, b) {
    if (a.name > b.name) {
        // sort b before a
        return 1;
    } else if (a.name < b.name) {
        // a and b different but unchanged (already in the correct order)
        return -1;
    } else return 0; // a and b are equal
}

function sortPokemon(list) {
    let sortedList = list.sort(compare); 
    return sortedList;   
}

function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    let pokeList = data.results;
    // sort our list before output it
    pokeList = sortPokemon(pokeList);
    pokeList.forEach((currentItem) => {
      const html = `<li>${currentItem.name}</li>`;
      //note the += here
      pokeListElement.innerHTML += html;
    });
  }

  




