const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, documentId, address, cp, city, email, phoneNumber, courses}} = req
    logic.createStudent(name, surname, documentId, address, cp, city, email, phoneNumber, courses)
        .then(student => res.json(success(student)))
        .catch(err => res.json(fail(err.message)))
}