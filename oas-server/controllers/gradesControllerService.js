'use strict'

const carr = require("./coursesControllerService");
const sarr = require("./studentsControllerService");

let grades = [
  {
      courseId: 1,
      studentId: 1,
      grade: 5,
      id: 1
  }
];

module.exports.findGrades = function findGrades(req, res, next) {
  res.json(grades);
};

module.exports.createGrades = function createGrades(req, res, next) {
  console.log(req.undefined.value.courseId);
  let newGrade = req.undefined.value;
  const findCourse = carr.courses.findIndex(x => x.id == req.undefined.value.courseId);
  const findStudent = sarr.students.findIndex(x => x.id == req.undefined.value.studentId);
  newGrade.id = grades.length + 1;
  findCourse >= 0 && findStudent >= 0
      ? (grades.push(newGrade), res.send("Grade Added"))
      : res.send("Record Not Found");
};

module.exports.grades = grades;