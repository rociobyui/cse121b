//modules.js. This is my script file.

/* 4. Import aCourse into the modules.js file (at the top). Once we have done that we can use it just as if it were created locally. This means we could use it multiple places in a large application while only having to write the code once! This type of re-use is why modules are such a powerful feature.
Once I have exported some features out of my module, I need to import them into my script to be able to use them.*/
import aCourse from "./Course.js";

// 3. In modules.js call aCourse.init() Activity 2
aCourse.init();

  
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
});
  
  // 6. Removing these two lines. They will be add back later.
  /*setCourseInfo(aCourse);
  renderSections(aCourse.sections);*/

