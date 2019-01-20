const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { query } } = req

    logic.listStudents(query)
        .then(students => res.json(success(students)))
        .catch(err => res.json(fail(err.message)))
}