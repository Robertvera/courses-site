const { Bills } = require('../models/index')
const { Courses } = require('../models/index')
const { Students } = require('../models/index')
const { Teachers } = require('../models/index')
const Utils = require('./utils')

module.exports = {
    /////////////////////////////// COURSES METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    createCourse(name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students) {
        return Promise.resolve()
        .then(()=> {
            return Courses.findOne({name})
        })
        .then((course)=> {
            if (course) throw Error('Course already exists')

            return Courses.create({ name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students })
        })
    },

    editCourse(name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students) {
        return Promise.resolve()
            .then(() => {
                return Courses.findOne({ name })
            })
            .then(course => {
                if (!course) throw Error('The course does not exist')

                if (students) return Courses.updateOne({ name }, {students})

                return Courses.updateOne({ name }, { description, excerpt, price, image, pdf, capacity, location, date, teachers })
            })
    },

    retrieveCourse(name) {
        return Promise.resolve()
            .then(() => {
                return Courses.find({ name })
            })
            .then(courses => {
                if (!courses) throw Error('course does not exist')

                return courses
            })
    },

    listCourses(skip) {
        return Courses.find({}).sort({date: -1}).skip(Number(skip)).limit(12)
    },

    removeCourse(name) {
        return Promise.resolve()
            .then(() => {
                return Courses.findOne({ name })
            })
            .then(course => {
                if (!course) throw Error('course does not exist')

                return Courses.deleteOne({ name })
            })
    },

    retrieveCourseQuery(query) {
        return Courses.find({  name: new RegExp(query, 'i') }, { __v: 0 })
    },

    retrieveCourseId(id) {
        return Promise.resolve()
            .then(() => {
                return Courses.find({ _id: id })
            })
            .then(courses => {
                if (!courses) throw Error('course does not exist')

                return courses
            })
    },

    /////////////////////////////// STUDENTS METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    createStudent(name, surname, documentId, address, cp, city, email, phoneNumber, courses) {
        return Promise.resolve()
            .then(()=> {
                return Students.findOne({documentId})
            })
            .then((student)=> {
                if (student) {
                    return Utils.addCourseToStudent(documentId, courses)
                }

                return Students.create({ name, surname, documentId, address, cp, city, email, phoneNumber, courses })
                    .then((student) => student
                    )
            })
    },

    listStudents(query) {
        if (query) {
            return Students.find({  name: new RegExp(query, 'i') }, { __v: 0 })
        }
        return Students.find({}, { __v: 0 }).sort({name: 1})
    },

    updateStudent(name, surname, documentId, address, cp, city, email, phoneNumber, courses) {
        return Promise.resolve()
            .then(() => {
                return Students.findOne({ documentId })
            })
            .then(student => {
                if (!student) throw Error('The student does not exist')

                return Students.updateOne({ documentId }, { name, surname, address, cp, city, email, phoneNumber, courses})
            })
    },

    retrieveStudent(documentId) {
        return Promise.resolve()
            .then(() => {
                return Students.findOne({ documentId }, { __v: 0 })
            })
            .then(student => {
                if (!student) throw Error('student does not exist')

                return student
            })
    },

    removeStudent(documentId) {
        return Promise.resolve()
            .then(() => {
                return Students.findOne({ documentId })
            })
            .then(student => {
                if (!student) throw Error('student does not exist')

                return Students.deleteOne({ documentId })
                    .then(() => documentId)
            })
    },
    /////////////////////////////// TEACHERS METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    createTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return Promise.resolve()
            .then(()=> {
                return Teachers.findOne({documentId})
            })
            .then((teacher)=> {
                if (teacher) throw Error('Teacher already exists')

                return Teachers.create({ name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses })
                    .then(() => documentId)
            })
    },

    listTeachers(query) {
        if (query) {
            return Teachers.find({  name: new RegExp(query, 'i') }, { __v: 0 })
        }
        return Teachers.find({}, { __v: 0 }).sort({name: 1})
    },

    updateTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return Promise.resolve()
            .then(() => {
                return Teachers.findOne({ documentId })
            })
            .then(teacher => {
                if (!teacher) throw Error('The teacher does not exist')

                return Teachers.updateOne({ documentId }, { name, surname, occupation, titles, email, twitter, linkedin, phoneNumber, courses})
            })
    },

    retrieveTeacher(id) {
        return Promise.resolve()
            .then(() => {
                return Teachers.findOne({ _id: id }, { __v: 0 })
            })
            .then(teacher => {
                if (!teacher) throw Error('teacher does not exist')

                return teacher
            })
    },

    removeTeacher(documentId) {
        return Promise.resolve()
            .then(() => {
                return Teachers.findOne({ documentId })
            })
            .then(teacher => {
                if (!teacher) throw Error('teacher does not exist')

                return Teachers.deleteOne({ documentId })
                    .then(() => documentId)
            })
    }

}