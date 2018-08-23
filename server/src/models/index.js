const mongoose = require('mongoose')

const { Bills, Courses, Students, Teachers } = require('./schemas')


module.exports = {
    Bills: mongoose.model('Bills', Bills),
    Courses: mongoose.model('Courses', Courses),
    Students: mongoose.model('Students', Students),
    Teachers: mongoose.model('Teachers', Teachers)
}