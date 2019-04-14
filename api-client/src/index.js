const axios = require('axios')

const vmApi = {

    _url() {
        // return 'https://www.vmbformacion.com/api'
        return 'http://localhost:5000/api'
    },

    _tokenBearer(token) {
        return {
            headers: {
                authorization: token
            }
        }
    },

    // TEACHERS ROUTES

    listTeachers: function (token, query) {
        return axios.get(`${this._url()}/teachers/${query}`, this._tokenBearer(token))
    },

    createTeacher: function (token, name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return axios.post(`${this._url()}/create-teacher`, { name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses}, this._tokenBearer(token))
    },

    editTeacher: function (token, name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return axios.put(`${this._url()}/edit-teacher/${documentId}`, { name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses}, this._tokenBearer(token))
    },

    retrieveTeacher: function(documentId) {
        return axios.get(`${this._url()}/teacher/${documentId}`)
    },

    deleteTeacher: function(token, documentId) {
        return axios.delete(`${this._url()}/teacher/${documentId}`, this._tokenBearer(token))
    },

    // STUDENTS ROUTES

    listStudents: function (token, query) {
        return axios.get(`${this._url()}/students/${query}`, this._tokenBearer(token))
    },

    createStudent: function (name, surname, documentId, address, cp, city, email, phoneNumber, courses) {
        return axios.post(`${this._url()}/create-student`, { name, surname, documentId, address, cp, city, email, phoneNumber, courses})
    },

    editStudent: function (token, name, surname, documentId, address, cp, city, email, phoneNumber, courses) {
        return axios.put(`${this._url()}/edit-student/${documentId}`, { name, surname, documentId, address, cp, city, email, phoneNumber, courses}, this._tokenBearer(token))
    },

    retrieveStudent: function(token, documentId) {
        return axios.get(`${this._url()}/student/${documentId}`, this._tokenBearer(token))
    },

    deleteStudent: function(documentId) {
        return axios.delete(`${this._url()}/student/${documentId}`)
    },

    // COURSES ROUTES

    listCourses: function (skip) {
        return axios.get(`${this._url()}/courses/${skip}`)
    },

    createCourse: function(token, name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students) {
        return axios.post(`${this._url()}/create-course`, { name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students }, this._tokenBearer(token))
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
        return axios.get(`${this._url()}/courses/query/${query}`)
    },

    deleteCourse: function(token, name) {
        return axios.delete(`${this._url()}/course/${name}`, this._tokenBearer(token))
    },

    //PAYMENT ROUTES

    sendPayment: function(token, item, price) {
        return axios.post(`${this._url()}/charges`, { token, item, price })
    },

    //MAILING ROUTES

    emailToStudent: function(to, content) {
        return axios.post(`${this._url()}/mailing`, { to, content })
    },

    //AUTH ROUTE
    authenticateUser(email, password) {
        return axios.post(`${this._url()}/authenticate`, { email, password })
    }
    
}

module.exports = vmApi
