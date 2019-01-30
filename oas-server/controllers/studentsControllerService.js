'use strict'

let students = [
  {
      name: "Pierce Brosnan",
      class: "DIN17SP",
      address: "15 Main Road, Exampleland",
      id: 1
  }
];

module.exports.findStudents = function findStudents(req, res, next) {
  res.json(students);
};

module.exports.createStudents = function createStudents(req, res, next) {
  let newStudent = req.student.value;
  newStudent.id = students.length + 1;
  students.push(newStudent);
  res.send("Student Added");
};

module.exports.students = students;