'use strict';

var axios = require('axios');

var vmApi = {
    _url: function _url() {
        // return 'https://www.vmbformacion.com/api'
        return 'http://localhost:5000/api';
    },
    _tokenBearer: function _tokenBearer(token) {
        return {
            headers: {
                authorization: token
            }
        };
    },


    // TEACHERS ROUTES

    listTeachers: function listTeachers(token, query) {
        return axios.get(this._url() + '/teachers/' + query, this._tokenBearer(token));
    },

    createTeacher: function createTeacher(token, name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return axios.post(this._url() + '/create-teacher', { name: name, surname: surname, documentId: documentId, occupation: occupation, titles: titles, email: email, twitter: twitter, linkedin: linkedin, phoneNumber: phoneNumber, courses: courses }, this._tokenBearer(token));
    },

    editTeacher: function editTeacher(token, name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return axios.put(this._url() + '/edit-teacher/' + documentId, { name: name, surname: surname, documentId: documentId, occupation: occupation, titles: titles, email: email, twitter: twitter, linkedin: linkedin, phoneNumber: phoneNumber, courses: courses }, this._tokenBearer(token));
    },

    retrieveTeacher: function retrieveTeacher(token, documentId) {
        return axios.get(this._url() + '/teacher/' + documentId, this._tokenBearer(token));
    },

    deleteTeacher: function deleteTeacher(token, documentId) {
        return axios.delete(this._url() + '/teacher/' + documentId, this._tokenBearer(token));
    },

    // STUDENTS ROUTES

    listStudents: function listStudents(query) {
        return axios.get(this._url() + '/students/' + query);
    },

    createStudent: function createStudent(name, surname, documentId, address, cp, city, email, phoneNumber, courses) {
        return axios.post(this._url() + '/create-student', { name: name, surname: surname, documentId: documentId, address: address, cp: cp, city: city, email: email, phoneNumber: phoneNumber, courses: courses });
    },

    editStudent: function editStudent(name, surname, documentId, address, cp, city, email, phoneNumber, courses) {
        return axios.put(this._url() + '/edit-student/' + documentId, { name: name, surname: surname, documentId: documentId, address: address, cp: cp, city: city, email: email, phoneNumber: phoneNumber, courses: courses });
    },

    retrieveStudent: function retrieveStudent(documentId) {
        return axios.get(this._url() + '/student/' + documentId);
    },

    deleteStudent: function deleteStudent(documentId) {
        return axios.delete(this._url() + '/student/' + documentId);
    },

    // COURSES ROUTES

    listCourses: function listCourses(skip) {
        return axios.get(this._url() + '/courses/' + skip);
    },

    createCourse: function createCourse(name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students) {
        return axios.post(this._url() + '/create-course', { name: name, description: description, excerpt: excerpt, price: price, image: image, pdf: pdf, capacity: capacity, location: location, date: date, teachers: teachers, students: students });
    },

    editCourse: function editCourse(name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students) {
        return axios.put(this._url() + '/course/' + name, { name: name, description: description, excerpt: excerpt, price: price, image: image, pdf: pdf, capacity: capacity, location: location, date: date, teachers: teachers, students: students });
    },

    retrieveCourse: function retrieveCourse(name) {
        return axios.get(this._url() + '/course/' + name);
    },

    retrieveCourseId: function retrieveCourseId(id) {
        return axios.get(this._url() + '/course/id/' + id);
    },

    retrieveCourseQuery: function retrieveCourseQuery(query) {
        return axios.get(this._url() + '/courses/query/' + query);
    },

    deleteCourse: function deleteCourse(name) {
        return axios.delete(this._url() + '/course/' + name);
    },

    //PAYMENT ROUTES

    sendPayment: function sendPayment(token, item, price) {
        return axios.post(this._url() + '/charges', { token: token, item: item, price: price });
    },

    //MAILING ROUTES

    emailToStudent: function emailToStudent(to, content) {
        return axios.post(this._url() + '/mailing', { to: to, content: content });
    },

    //AUTH ROUTE
    authenticateUser: function authenticateUser(email, password) {
        return axios.post(this._url() + '/authenticate', { email: email, password: password });
    }
};

module.exports = vmApi;
