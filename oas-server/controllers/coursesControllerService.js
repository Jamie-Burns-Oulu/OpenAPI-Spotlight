'use strict'

let courses = [
  {
      name: "Express",
      description: "JavaScript Back-End Framework",
      id: 1
  }
];

module.exports.findCourses = function findCourses(req, res, next) {
  res.json(courses);
};

module.exports.createCourses = function createCourses(req, res, next) {
  let newCourse = req.undefined.value;
  newCourse.id = courses.length + 1;
  courses.push(newCourse);
  res.send("Course Added");
};


module.exports.courses = courses;