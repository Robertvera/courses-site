const { Bills } = require('../models/index')
const { Courses } = require('../models/index')
const { Students } = require('../models/index')
const { Teachers } = require('../models/index')

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

                return Courses.updateOne({ name }, { description, excerpt, price, image, pdf, capacity, location, date, teachers, students })
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

    listCourses() {
        return Courses.find({}).sort({date: -1})
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

    /////////////////////////////// STUDENTS METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    createStudent(name, surname, documentId, address, cp, city, email, phoneNumber, courses) {
        return Promise.resolve()
            .then(()=> {
                return Students.findOne({documentId})
            })
            .then((student)=> {
                if (student) throw Error('Student already exists')

                return Students.create({ name, surname, documentId, address, cp, city, email, phoneNumber, courses })
                    .then(() => documentId)
            })
    },

    listStudents() {
        return Students.find({}, { __v: 0 })
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
        return Teachers.find({}, { __v: 0 })
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