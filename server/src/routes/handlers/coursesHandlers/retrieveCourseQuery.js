const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { query } } = req

    logic.retrieveCourseQuery(query)
        .then(courses => res.json(success(courses)))
        .catch(err => res.json(fail(err.message)))
}