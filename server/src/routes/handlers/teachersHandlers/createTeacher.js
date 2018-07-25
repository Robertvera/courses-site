const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses}} = req
    logic.createTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses)
        .then(teacher => res.json(success(teacher)))
        .catch(err => res.json(fail(err.message)))
}