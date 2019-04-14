import Api from '../../api/vmApi';

const tokenHelper={
	__userApiToken__: null,

	authenticateUser(email, password) {
		return Api.authenticateUser(email, password)
			.then((userToken) => this.__userApiToken__ = userToken.data.data);
	},

	logOutUser() {
		this.__userApiToken__ = null
	},
	
	listTeachers(query) {
		return Api.listTeachers(this.__userApiToken__, query)
	},

	createTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber) {
		return Api.createTeacher(this.__userApiToken__, name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber)
	},

	editTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses) {
		return Api.editTeacher(this.__userApiToken__, name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses)
	},

	deleteTeacher(documentId) {
		return Api.deleteTeacher(this.__userApiToken__, documentId)
	},

	listStudents(query) {
		return Api.listStudents(this.__userApiToken__, query)
	},

	deleteStudent(documentId) {
		return Api.deleteStudents(this.__userApiToken__, documentId)
	},
	
	retrieveStudent(documentId) {
		return Api.retrieveStudent(this.__userApiToken__, documentId)
	},

	editStudent(name, surname, documentId, address, cp, city, email, phoneNumber, courses) {
		return Api.editStudent(this.__userApiToken__, name, surname, documentId, address, cp, city, email, phoneNumber, courses)
	},

	createCourse(name, description, excerpt, price, image, pdf, capacity, location, date, teacher, students) {
		return Api.createCourse(this.__userApiToken__, name, description, excerpt, price, image, pdf, capacity, location, date, teacher, students)
	},

	deleteCourse(name) {
		return Api.deleteCourse(this.__userApiToken__, name)
	}
	
}


export default tokenHelper