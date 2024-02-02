// courses.js

// 1. Create an object literal to represent a course. It should include the course name and course number.
// Keys that store data are called properties, keys that store functions are called methods.
const aCourse = {
    code: "CSE121b", 
    name: "Javascript Language",
    // 2. In order to assign students to a course so it can be taught one or more sections must be created. Add a sections property to the object. Since a course can have more than one section make this an array. A section will look like this: 
    sections: [
     {
        sectionNum: 1, 
        roomNum: "STC 353", 
        enrolled: 26, 
        days: "TTh", 
        instructor: "Bro T", 
    },
    {
        sectionNum: 2, 
        roomNum: "STC 347", 
        enrolled: 28, 
        days: "TTh", 
        instructor: "Sis A T",
    }, 
 ],
//};

/*
// 2. Create a function to set the name and number of the course in the HTML. Pass the course object into your function (remember that you can use the dot notation to access the parts of an object.)

// Function to set the name and number of the course in HTML.
function setCourseNameAndNumber(course) {
    // Accessing the properties of the course object using dot notation
    const courseNameElement = document.querySelector("#courseName");
    const courseNumberElement = document.querySelector("#courseCode");

    //Setting the content of HTML elements.;
    courseNameElement.textContent = course.name;
    courseNumberElement.textContent = course.code;
}

// Create another function that will output the sections into the table identified by #sections. You should pass the sections you want rendered into the function.
function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        </tr>`
    );
    document.querySelector("#sections").innerHTML = html.join(""); //The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. 
}

setCourseNameAndNumber(aCourse);
renderSections(aCourse.sections);
*/

//Activity 2
//Add a method to the object that will allow us to add a student to a section. The method should take as argument the section number we are enrolling the student in. Call it enrollstudent(sectionNum)
enrollStudent: function(sectionNum) {
    //Find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum   
    );
    //If the section exists, then add 1 to enrolled, and then call the renderSections function to show our change
    if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        //Call of the renderSections function
        renderSections(this.sections);    
    }
},
//Create another method called dropStudent(section). Subtract 1 from enrolled if the section passed in is found.
dropStudent: function (sectionNum) {
    //Find the righ section...Array.findIndex will work her
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum    
    );
    if (sectionIndex >= 0) {
        this.sections[sectionIndex]. enrolled--;
        renderSections(this.sections);
    }

  },

};

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
  }
  
  function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }
  
  //5. Add an event listener for the enrollStudent button. The event handler function in each case should grab the contents of the #sectionNumber input and pass it into the appropriate function.  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  //5. Add an event listener for the dropStuden button. The event handler function in each case should grab the contents of the #sectionNumber input and pass it into the appropriate function.  
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);