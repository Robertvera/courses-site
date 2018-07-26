const { Router } = require('express')
const bodyParser = require('body-parser')
const { createCourse, editCourse, removeCourse, retrieveCourse, createStudent, editStudent, removeStudent, retrieveStudent, listStudents, createTeacher, editTeacher, removeTeacher, retrieveTeacher, listTeachers } = require('./handlers')

const router = Router()

const jsonBodyParser = bodyParser.json()


// TEACHERS ROUTES

router.get('/teachers', listTeachers)

router.post('/teacher', jsonBodyParser, createTeacher)

router.put('/teacher/:documentId', jsonBodyParser, editTeacher)

router.get('/teacher/:documentId', retrieveTeacher)

router.delete('/teacher/:documentId', removeTeacher)

// STUDENTS ROUTES

router.get('/students', listStudents)

router.post('/student', jsonBodyParser, createStudent)

router.put('/student/:documentId', jsonBodyParser, editStudent)

router.get('/student/:documentId', retrieveStudent)

router.delete('/student/:documentId', removeStudent)


// COURSES ROUTES

router.post('/course', jsonBodyParser, createCourse)

router.put('/course/:name', jsonBodyParser, editCourse)

router.get('/course/:name', retrieveCourse)

router.delete('/course/:name', removeCourse)

module.exports = router