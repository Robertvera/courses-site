const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    
    students: [
        {
            type: ObjectId,
            ref: 'Students'
        }
    ],

    courses: [
        {
            type: ObjectId,
            ref: 'Courses'
        }
    ]
})