/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* 2.1 Function Definition - Add Numbers */
function add(number1, number2) {
    // 2.2 Function body.
    return number1 + number2;
}
// 2.3 Using a function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of add1 and add2.
function addNumbers() { 
    let number1 = parseFloat(document.getElementById("add1").value);
    let number2 = parseFloat(document.getElementById("add2").value);
    let sum = add(number1, number2); 
    document.getElementById("sum").value = sum.toFixed(2); // This dot notation is how JavaScript grants access to the data inside an object. The dot (.)   
}
// 2.5 Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function. This line of code is NOT located inside a function. Why❔
document.getElementById("addNumbers").addEventListener("click", addNumbers); //attach an event listener to the '#submitTask' button that will call the newTask function when it is clicked after completing the following line info in this file "renderTasks(tasks); // Yay!"

/* 3. Function Expression - Subtract Numbers */ // Another way to declare or define a function
let subtract = function subtract(number1, number2) {
    return number1 - number2;
}
let subtractNumbers = function subtractNumbers() {
    let subtract1 = parseFloat(document.getElementById("subtract1").value); // This dot notation is how JavaScript grants access to the data inside an object. The dot (.)
    let subtract2 = parseFloat(document.getElementById("subtract2").value);
    let difference = subtract(subtract1, subtract2); // This dot notation is how JavaScript grants access to the data inside an object. The dot (.)
    document.getElementById("difference").value = difference.toFixed(2); // This dot notation is how JavaScript grants access to the data inside an object. The dot (.)
}

// Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function. This line of code is NOT located inside a function. Why❔
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* 4. Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById("factor1").value); // This dot notation is how JavaScript grants access to the data inside an object. The dot (.)
    let factor2 = parseFloat(document.getElementById("factor2").value); // This dot notation is how JavaScript grants access to the data inside an object. The dot (.)
    let product = multiply(factor1, factor2); 
    document.getElementById("product").value = product.toFixed(2); // This dot notation is how JavaScript grants access to the data inside an object. The dot (.)
}

// Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function. This line of code is NOT located inside a function. Why❔
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* 5. Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

// Arrow function (my choice)
const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value); // This dot notation is how JavaScript grants access to the data inside an object. The dot (.) In this line we are indicating to get the element by its ID and storage it because we will process it.
    let divisor = parseFloat(document.getElementById("divisor").value); // This dot notation is how JavaScript grants access to the data inside an object. The dot (.)
    let quotient = divide(dividend, divisor); // Call of the divide()
    document.getElementById("quotient").value = quotient.toFixed(2); // This dot notation is how JavaScript grants access to the data inside an object. The dot (.)
}

// Event listener for divideNumbers button
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* 6. Decision Structure */

// I had to build this function at the end to make the staments work, assigment's indicatons did not aske for it, but it is implicit in the instruction with the word functionality.
function getTotal() {
    // Input
    let subtotal = parseFloat(document.getElementById("subtotal").value); // like let dividend and let divisor (above).
    // Processing here
    if (document.getElementById("member").checked) { // Going to the HTML file for the ID element.
        subtotal = subtotal - subtotal * 0.20; // 20% discount
    }
    // Output 
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`; // The total is not a value, it is a span tag in my HTML file so we can use textContent. Two $ signs (template literal and a $ sign)
}
// Add event listener for getTotal  button.
document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */

// 1. Declare and instantiate an array variable to hold the numbers 1 through 13.
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]; // Here the array was only create. The HTML file has not info stored of it, that's why we need to assign it in the following code.

/* Output Source Array */ //Assign the value of the array variable to the HTML element with an ID of array.
document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */ // Use the filter() array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of odds.
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 1); // Using the modulus operator (%)This operator can be used to determine whether a number is odd or even by determining whether the remainder after dividing it by two equals zero or not. It is even if it equals 0. Otherwise, it is odd.
// The first part of the above code (before the equal operator) assigns the resull of using the filter method to the HTML element with an ID odds.

/* Output Evens Only Array */ // Use the filter() array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of evens. // Using the modulus operator (%)This operator can be used to determine whether a number is odd or even by determining whether the remainder after dividing it by two equals zero or not. It is even if it equals 0. Otherwise, it is odd.
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */ //Use the reduce() array method to sum the array variable elements and assign the result to the HTML element with an ID of sumOfArray
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
// After of the equal (=) operator is the expression where the reduce() array method is applied. At first call, it returns the initial value, and the iteration starts from array element 1.

/* Output Multiplied by 2 Array */ // Use the map() array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of multiplied.
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */ // Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied.
const doubleArray = document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);
document.querySelector("#sumOfMultiplied").innerHTML = doubleArray.reduce((sum, multiplied) => sum + multiplied);