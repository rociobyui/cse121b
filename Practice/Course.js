// 1. Modules file. Create a new file to hold our module. Name it Course.js. 

    // Copy and Paste the aCourse object from the modules.js file.
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
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
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],

    // Option two. We will add another method to the object to run them both as needed.
    init() {
        setCourseInfo(this); // In the init method call both setCourseInfo and renderSections (Remember this!)
        renderSections(this.sections);
    },

    changeEnrollment: function (sectionNum, add = true) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          if (add) {
            this.sections[sectionIndex].enrolled++;
          } else {
            this.sections[sectionIndex].enrolled--;
          }
          renderSections(this.sections);
        }
      },

    
    };
    
    

    // Copy and Paste setCourseInfo() function from the modules.js file.
    function setCourseInfo(course) {
        const courseName = document.querySelector("#courseName");
        const coursecode = document.querySelector("#courseCode");
        courseName.textContent = course.name;
        coursecode.textContent = course.code;
      }

    // Copy and Paste the renderSections()function from the modules.js file.
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
      // 3. Make the aCourse object the default export. A more convenient way of exporting all the items I want to export is to use A SINGLE STATEMENT AT THE END OF MY MODULE FILE.
      export default aCourse;

