import Api from '../../api/vmApi';

const tokenHelper={
	__userApiToken__: null,

	authenticateUser() {
		return Api.authenticateUser()
			.then((userToken) => this.__userApiToken__ = userToken.data.data);
	},

	logOutUser() {
        this.__userApiToken__ = null
	},
	
	listTeachers(query) {
		return Api.listTeachers(this.__userApiToken__, query)
	}
}


export default tokenHelper