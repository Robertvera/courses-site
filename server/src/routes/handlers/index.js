const { createCourse, editCourse, removeCourse, retrieveCourse } = require('./coursesHandlers')
const { createStudent, editStudent, removeStudent, retrieveStudent } = require('./studentsHandlers')
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
    createTeacher,
    editTeacher,
    removeTeacher,
    retrieveTeacher,
    listTeachers
}