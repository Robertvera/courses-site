const axios = require('axios')

const vmApi = {

    _url() {
        //return `https://aqueous-tundra-90892.herokuapp.com/api`
        return 'http://localhost:5000/api'
    },

    // TEACHERS ROUTES

    listTeachers: function (query) {
        return axios.get(`${this._url()}/teachers/${query}`)
    },

    createTeacher: function (name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return axios.post(`${this._url()}/create-teacher`, { name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses})
    },

    editTeacher: function (name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return axios.put(`${this._url()}/edit-teacher/${documentId}`, { name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses})
    },

    retrieveTeacher: function(documentId) {
        return axios.get(`${this._url()}/teacher/${documentId}`)
    },

    deleteTeacher: function(documentId) {
        return axios.delete(`${this._url()}/teacher/${documentId}`)
    },

    // STUDENTS ROUTES

    listStudents: function (query) {
        return axios.get(`${this._url()}/students/${query}`)
    },

    createStudent: function (name, surname, documentId, address, cp, city, email, phoneNumber, courses) {
        return axios.post(`${this._url()}/create-student`, { name, surname, documentId, address, cp, city, email, phoneNumber, courses})
    },

    editStudent: function (name, surname, documentId, address, cp, city, email, phoneNumber, courses) {
        return axios.put(`${this._url()}/edit-student/${documentId}`, { name, surname, documentId, address, cp, city, email, phoneNumber, courses})
    },

    retrieveStudent: function(documentId) {
        return axios.get(`${this._url()}/student/${documentId}`)
    },

    deleteStudent: function(documentId) {
        return axios.delete(`${this._url()}/student/${documentId}`)
    },

    // COURSES ROUTES

    listCourses: function (skip) {
        return axios.get(`${this._url()}/courses/${skip}`)
    },

    createCourse: function(name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students) {
        return axios.post(`${this._url()}/create-course`, { name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students })
    },

    editCourse: function(name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students) {
        return axios.put(`${this._url()}/course/${name}`, { name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students })
    },

    retrieveCourse: function(name) {
        return axios.get(`${this._url()}/course/${name}`)
    },

    retrieveCourseId: function(id) {
        return axios.get(`${this._url()}/course/id/${id}`)
    },

    retrieveCourseQuery: function(query) {
        return axios.get(`${this._url()}/courses/${query}`)
    },

    deleteCourse: function(name) {
        return axios.delete(`${this._url()}/course/${name}`)
    },
}

module.exports = vmApi
