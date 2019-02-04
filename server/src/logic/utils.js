const { Students } = require('../models/index')

module.exports = {
	addCourseToStudent (documentId, newCourseRegistration) {
		return Promise.resolve()
		.then(()=> {
			return Students.findOne({documentId}).populate('courses')
		})
		.then((student) => {
			const newCoursesArray = student.courses
			newCoursesArray.push(newCourseRegistration)

			return Students.updateOne({documentId}, {courses: newCoursesArray})
		})
	}
}