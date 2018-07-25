const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { documentId } } = req

    logic.removeTeacher(documentId)
        .then(teacher => res.json(success(teacher)))
        .catch(err => res.json(fail(err.message)))
}