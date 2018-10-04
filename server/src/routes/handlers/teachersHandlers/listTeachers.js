const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { query } } = req

    logic.listTeachers(query)
        .then(teachers => res.json(success(teachers)))
        .catch(err => res.json(fail(err.message)))
}