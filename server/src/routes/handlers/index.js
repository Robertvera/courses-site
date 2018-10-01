const { listCourses, createCourse, editCourse, removeCourse, retrieveCourse, retrieveCourseQuery } = require('./coursesHandlers')
const { createStudent, editStudent, removeStudent,retrieveStudent, listStudents } = require('./studentsHandlers')
const { createTeacher, editTeacher, removeTeacher, retrieveTeacher, listTeachers } = require('./teachersHandlers')

module.exports = {
    listCourses,
    createCourse,
    editCourse,
    removeCourse,
    retrieveCourse,
    retrieveCourseQuery,
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