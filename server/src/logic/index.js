const { Bills } = require('../models/index')
const { Courses } = require('../models/index')
const { Students } = require('../models/index')
const { Teachers } = require('../models/index')

module.exports = {
    /////////////////////////////// COURSES METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    createCourse(name, description, excerpt, price, image, pdf, teachers, students, capacity) {

    },

    /////////////////////////////// STUDENTS METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    /////////////////////////////// TEACHERS METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    createTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return Promise.resolve()
            .then(()=> {
                return Teachers.findOne({documentId})
            })
            .then((teacher)=> {
                if (teacher) throw Error('Teacher already exists')

                return Teacher.create({ name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses })
                    .then(() => documentId)
            })
    },

    listTeachers() {
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

    retrieveTeacher(documentId) {
        return Promise.resolve()
            .then(() => {
                return Teachers.findOne({ documentId }, { __v: 0 })
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