const { createCourse, editCourse, removeCourse, retrieveCourse } = require('./coursesHandlers')
const { createStudent, editStudent, removeStudent,retrieveStudent, listStudents } = require('./studentsHandlers')
const { createTeacher, editTeacher, removeTeacher, retrieveTeacher, listTeachers } = require('./teachersHandlers')

module.exports = {
    createCourse,
    editCourse,
    removeCourse,
    retrieveCourse,
    createStudent,
    editStudent,
    removeStudent,
    retrieveStudent,
    listStudents,
    createTeacher,
    editTeacher,
    removeTeacher,
    retrieveTeacher,
    listTeachers
}