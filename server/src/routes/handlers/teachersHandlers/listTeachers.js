const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    logic.listTeachers()
        .then(teachers => res.json(success(teachers)))
        .catch(err => res.json(fail(err.message)))
}