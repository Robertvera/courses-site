const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, occupation, titles, email, twitter, linkedin, phoneNumber, courses } } = req
    const { params: { documentId } } = req

    logic.updateTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses)    
        .then(() => res.json(success()))
        .catch(err => res.json(fail(err.message)))
}