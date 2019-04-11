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

	retrieveTeacher(documentId) {
		return Api.retrieveTeacher(this.__userApiToken__, documentId)
	},

	deleteTeacher(documentId) {
		return Api.deleteTeacher(this.__userApiToken__, documentId)
	}
}


export default tokenHelper