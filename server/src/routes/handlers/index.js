const { listCourses, createCourse, editCourse, removeCourse, retrieveCourse, retrieveCourseQuery, retrieveCourseId } = require('./coursesHandlers')
const { createStudent, editStudent, removeStudent,retrieveStudent, listStudents } = require('./studentsHandlers')
const { createTeacher, editTeacher, removeTeacher, retrieveTeacher, listTeachers } = require('./teachersHandlers')
const { createPayment } = require('./paymentsHandlers')
const { sendEmail } = require('./emailHandlers')

module.exports = {
    listCourses,
    createCourse,
    editCourse,
    removeCourse,
    retrieveCourse,
    retrieveCourseQuery,
    retrieveCourseId,
    createStudent,
    editStudent,
    removeStudent,
    retrieveStudent,
    listStudents,
    createTeacher,
    editTeacher,
    removeTeacher,
    retrieveTeacher,
    listTeachers,
    createPayment,
    sendEmail
}