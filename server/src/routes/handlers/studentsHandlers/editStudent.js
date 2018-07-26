const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, address, cp, city, email, phoneNumber, courses } } = req
    const { params: { documentId } } = req

    logic.updateStudent(name, surname, documentId, address, cp, city, email, phoneNumber, courses)    
        .then(() => res.json(success()))
        .catch(err => res.json(fail(err.message)))
}