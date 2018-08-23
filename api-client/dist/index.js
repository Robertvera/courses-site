'use strict';

var axios = require('axios');

var vmApi = {
    _url: function _url() {
        //return `https://aqueous-tundra-90892.herokuapp.com/api`
        return 'http://localhost:5000/api';
    },


    // TEACHERS ROUTES

    listTeachers: function listTeachers(query) {
        return axios.get(this._url() + '/teachers/' + query);
    },

    createTeacher: function createTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return axios.post(this._url() + '/create-teacher', { name: name, surname: surname, documentId: documentId, occupation: occupation, titles: titles, email: email, twitter: twitter, linkedin: linkedin, phoneNumber: phoneNumber, courses: courses });
    },

    editTeacher: function editTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
        return axios.put(this._url() + '/edit-teacher/' + documentId, { name: name, surname: surname, documentId: documentId, occupation: occupation, titles: titles, email: email, twitter: twitter, linkedin: linkedin, phoneNumber: phoneNumber, courses: courses });
    },

    retrieveTeacher: function retrieveTeacher(documentId) {
        return axios.get(this._url() + '/teacher/' + documentId);
    },

    deleteTeacher: function deleteTeacher(documentId) {
        return axios.delete(this._url() + '/teacher/' + documentId);
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

    createCourse: function createCourse(name, description, excerpt, price, image, pdf, teachers, students, capacity, location) {
        return axios.post(this._url() + '/create-course', { name: name, description: description, excerpt: excerpt, price: price, image: image, pdf: pdf, teachers: teachers, students: students, capacity: capacity, location: location });
    },

    editCourse: function editCourse(name, description, excerpt, price, image, pdf, teachers, students, capacity, location) {
        return axios.put(this._url() + '/create-course/' + name, { name: name, description: description, excerpt: excerpt, price: price, image: image, pdf: pdf, teachers: teachers, students: students, capacity: capacity, location: location });
    },

    retrieveCourse: function retrieveCourse(name) {
        return axios.get(this._url() + '/course/' + name);
    },

    deleteCourse: function deleteCourse(name) {
        return axios.delete(this._url() + '/course/' + name);
    }
};

module.exports = vmApi;
