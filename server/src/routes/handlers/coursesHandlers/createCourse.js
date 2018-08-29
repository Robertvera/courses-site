const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students } } = req
    
    logic.createCourse(name, description, excerpt, price, image, pdf, capacity, location, date, teachers, students)
        .then(course => res.json(success(course)))
        .catch(err => res.json(fail(err.message)))
}