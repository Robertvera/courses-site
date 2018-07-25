const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { documentId } } = req

    logic.removeStudent(documentId)
        .then(student => res.json(success(student)))
        .catch(err => res.json(fail(err.message)))
}