// Activity 1 - Map (no working)

//1. Declare an array with value = ['one', 'two', 'three'] // Array of strings in JavaScript
const steps = ['one', 'two', 'three'];
//Convert our array of strings into an array of HTML strings. Each string should be turned into a list item. For example: "<li>one</li>"
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;

});
//Set our list of HTML strings into the myList list. (Hint...checkout the .join method.)
document.getElementById("myList").innerHTML = stepsHtml.join();

//Solution (not working)
//example 1
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();


//Activity 2 - Map

// 1.Declare an array with letter grades in it: ['A', 'B', 'A']
const grades = ['A', 'B', 'A'];

// 2. Write a function that will take one letter grade, and return the appropriate gpa points for that grade. IE if we send in 'A' it should return 4.
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points =  3;
    } 
    
    return points;
} 
// 3. Use map and our conversion function to convert the array in step 1 to gpa points.
const gpaPoints = grades.map(convertGradeToPoints);



// Activity 3 - Reduce  (reduce is useful when we need to compress an array into a single value. It is most often used when the array has at least one value that can be mathematically flattened)

// 1. Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
// Mio. Ni le atine. Gruuuu  const points = convertGradeToPoints.reduce((total, grade) => total + grade.length, 0) / grade.length;

//Solution 1
const gpaPoints = grades.map(convertGradeToPoints); // map produces a new array
pointsTotal = gpaPoints.reduce(function (total, item) { // Summ of all values. It is an array and no initial value. The function inside of reduce, called function reducer, has an accumulator (in this case "total"), a current value ("item"), and an index. The inner function returs accumulator + currentValue. It starts in the index 0
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

//Solution 2 (this is the same thing as above)
const pointsTotal = gpaPoints.reduce((total, item) = total + item);
const gpa = pointsTotal / gpaPoints.length;

//Solution 3 (the above could be further simplified as)
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


// Activity 4 - Filter (filter is similar to map in that it returns a new array of elements. The elements in the calling array will be included in the new array if they pass a test that you include in the callback you pass in.)

//Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
//Using filter keep only the fruits that are longer than 6 characters.
longWords = words.filter((word) => word.length > 6);


//Activity 5 - indexOf  returns the first index at which a given element can be found in the array, or -1 if it is not present.
//1. Declare an array with the following value: [12, 34, 21, 54]
const numbers = [12, 3, 4, 21, 54];
// 2. Declare a luckNumber variable with the value 21;
const luckyNumber = 21;
luckyIndex = numbers.indexOf(luckyNumber);